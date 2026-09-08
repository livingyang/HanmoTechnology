#!/usr/bin/env pwsh
# Double-click release publisher (zero-argument, auto-derive).
#
# Place this script INSIDE the same folder as the target zip, e.g.:
#   temp/HanmoWesnoth/v0.1.0/publish-release.ps1
#   temp/HanmoWesnoth/v0.1.0/HanmoWesnoth-v0.1.0-win.zip
#
# It derives everything from its own location:
#   - Tag   = the leaf folder name (e.g. v0.1.0)
#   - Slug  = the folder above it (e.g. HanmoWesnoth)
#   - Zip   = the single *.zip in the same folder
#
# It then delegates the actual `gh release create` to the core script
# tools/publish-demo-release.ps1, and (on success) offers to run git push.
#
# Requires: gh CLI + gh auth login (see tools/README-publish-release.md).
# Reference: DEMO-HOSTING.md section 9.6 / 9.8.

[CmdletBinding()]
param(
    [switch]$Replace
)

$ErrorActionPreference = "Stop"

# ----- Derive Slug / Tag / ZipPath from this script location -----
# Folder layout: temp/<Slug>/<Tag>/<this script>.ps1 + <Slug>-<Tag>-win.zip

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$scriptDir = (Resolve-Path $scriptDir).Path

$leaf = Split-Path -Leaf $scriptDir          # e.g. v0.1.0       -> Tag
$parent = Split-Path -Parent $scriptDir      # e.g. temp/HanmoWesnoth
$slug = Split-Path -Leaf $parent             # e.g. HanmoWesnoth -> Slug

$Tag = $leaf
$Slug = $slug

# Auto-detect the single zip in this folder. Support both patterns:
#   <Slug>-<Tag>-win.zip  (preferred)  or  any single *.zip as fallback.
$zips = @(Get-ChildItem -Path $scriptDir -Filter "*.zip" -File)
if ($zips.Count -eq 0) {
    Write-Host "[ERR] no .zip found in: $scriptDir" -ForegroundColor Red
    Write-Host "      Put this script next to the target zip and double-click again."
    exit 1
}
if ($zips.Count -gt 1) {
    Write-Host "[ERR] multiple .zip files in folder: $scriptDir" -ForegroundColor Red
    $zips | ForEach-Object { Write-Host "      - $($_.Name)" }
    Write-Host "      Keep exactly one zip, or use the core script directly."
    exit 1
}
$ZipPath = $zips[0].FullName

$zipSize = (Get-Item $ZipPath).Length
$zipMB = [math]::Round($zipSize / 1MB, 2)

# ----- Pre-checks: gh CLI + auth -----
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "[ERR] gh CLI not installed. Run: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}
gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERR] gh not authenticated. Run: gh auth login" -ForegroundColor Red
    exit 1
}

# ----- Show a summary and a lightweight confirmation -----
Write-Host ""
Write-Host "  Double-click release publisher" -ForegroundColor Cyan
Write-Host "  ------------------------------"
Write-Host "  Slug   : $Slug"
Write-Host "  Tag    : $Tag"
Write-Host "  Zip    : $ZipPath"
Write-Host "  Size   : $zipMB MB"
Write-Host "  Repo   : livingyang/HanmoTechnology"
Write-Host ""

if (-not $Replace) {
    $confirm = Read-Host "Confirm publish? input y to continue"
    if ($confirm -ne "y") {
        Write-Host "[info] cancelled." -ForegroundColor Yellow
        exit 0
    }
}

# ----- Locate repo root by walking up until we find tools/ -----
# This keeps the double-click script position-independent: it works from
# temp/<slug>/<v>/ or anywhere else inside the repo.
$repoRoot = $null
$probe = $scriptDir
while ($true) {
    $candidate = Join-Path $probe "tools\publish-demo-release.ps1"
    if (Test-Path $candidate) {
        $repoRoot = $probe
        break
    }
    $parent = Split-Path -Parent $probe
    if ($parent -eq $probe) { break }   # reached filesystem root
    $probe = $parent
}
if (-not $repoRoot) {
    Write-Host "[ERR] repo root not found (looked for tools/publish-demo-release.ps1)" -ForegroundColor Red
    exit 1
}
$core = Join-Path $repoRoot "tools\publish-demo-release.ps1"

Write-Host ""
Write-Host "[exec] delegating to core publisher..." -ForegroundColor Cyan
Write-Host ""

$coreArgs = @(
    "-Tag", $Tag,
    "-ZipPath", $ZipPath,
    "-Slug", $Slug
)
if ($Replace) { $coreArgs += "-Replace" }

& powershell -NoProfile -ExecutionPolicy Bypass -File $core @coreArgs
$coreRc = $LASTEXITCODE

if ($coreRc -ne 0) {
    Write-Host "[ERR] release publish failed (exit $coreRc). See output above." -ForegroundColor Red
    exit $coreRc
}

# ----- Publish succeeded: offer to also git push (triggers Pages deploy) -----
$assetName = Split-Path $ZipPath -Leaf
$assetUrl = "https://github.com/livingyang/HanmoTechnology/releases/download/$Tag/$assetName"

Write-Host ""
Write-Host "[ok] Release published" -ForegroundColor Green
Write-Host "  Asset: $assetUrl"
Write-Host ""

$hubRoot = $repoRoot

$pushConfirm = Read-Host "Also git push origin main now? input y to push (any other key to skip)"
if ($pushConfirm -eq "y") {
    Push-Location $hubRoot
    try {
        Write-Host ""
        Write-Host "[exec] git push origin main" -ForegroundColor Cyan
        git push origin main
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "[ok] pushed. Pages will auto-deploy." -ForegroundColor Green
        } else {
            Write-Host "[warn] git push failed (exit $LASTEXITCODE). Push manually." -ForegroundColor Yellow
        }
    } finally {
        Pop-Location
    }
} else {
    Write-Host "[info] skipped git push. Run it manually to deploy Pages." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[done] Main page download button will be live after Pages deploys." -ForegroundColor Green
