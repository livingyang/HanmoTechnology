#!/usr/bin/env pwsh
# Publish a demo zip as a Hub release.
#
# Usage:
#   ./tools/publish-demo-release.ps1 -Tag HanmoIdleMMO-v0.0.3 -ZipPath C:/.../HanmoIdleMMO-v0.0.3-win.zip -Slug HanmoIdleMMO [-Draft] [-Replace]
#
# NOTE: Tag MUST be globally unique across products. Use "<Slug>-<version>"
# (e.g. HanmoIdleMMO-v0.0.3), NOT a bare version (v0.0.3), so that two products
# at the same version never collide on the repo-wide release tag namespace.
#
# Requires:
#   - gh CLI on PATH (winget install GitHub.cli)
#   - gh auth login already done
#
# Reference: DEMO-HOSTING.md section 9 (delivery channel)
# Reference: tools/README-publish-release.md for token setup

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)][string]$Tag,
    [Parameter(Mandatory=$true)][string]$ZipPath,
    [Parameter(Mandatory=$true)][string]$Slug,
    [switch]$Draft,
    [switch]$Replace,
    [string]$Repo = "livingyang/HanmoTechnology"
)

$ErrorActionPreference = "Stop"

# ----- Pre-check -----

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "[ERR] gh CLI not installed. Run: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}

gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERR] gh not authenticated. Run: gh auth login" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $ZipPath)) {
    Write-Host "[ERR] zip file not found: $ZipPath" -ForegroundColor Red
    exit 1
}

$zipFull = (Resolve-Path $ZipPath).Path
$zipSize = (Get-Item $zipFull).Length
$zipMB = [math]::Round($zipSize / 1MB, 2)

# ----- Replace existing tag/release if requested -----

if ($Replace) {
    Write-Host "[info] -Replace: deleting existing release and tag if any..." -ForegroundColor Cyan
    gh release delete $Tag --repo $Repo --yes 2>&1 | Out-Null
    gh tag delete $Tag --repo $Repo --yes 2>&1 | Out-Null
}

# ----- Show what we are about to do -----

$title = $Tag

if ($Draft) {
    $modeText = "DRAFT [private, not public]"
} else {
    $modeText = "PUBLIC [publish immediately]"
}

Write-Host ""
Write-Host "Tag    : $Tag"
Write-Host "Slug   : $Slug"
Write-Host "Zip    : $zipFull"
Write-Host "Size   : $zipMB MB"
Write-Host "Repo   : $Repo"
Write-Host "Title  : $title"
Write-Host "Mode   : $modeText"
Write-Host ""

if (-not $Draft) {
    $confirm = Read-Host "Confirm publish? input y to continue"
    if ($confirm -ne "y") {
        Write-Host "[info] cancelled." -ForegroundColor Yellow
        exit 0
    }
}

# ----- Build notes (Chinese-free for parser safety) -----

$webUrl = "https://livingyang.github.io/HanmoTechnology/demos/$Slug/"
$notes = "Web build: $webUrl"

# ----- Run gh release create -----

$ghArgs = @("release","create",$Tag,$zipFull,"--repo",$Repo,"--title",$title,"--notes",$notes)
if ($Draft) { $ghArgs += "--draft" }

Write-Host ""
Write-Host "[exec] gh $($ghArgs -join ' ')"
Write-Host ""

gh @ghArgs
$rc = $LASTEXITCODE

if ($rc -eq 0) {
    $assetName = Split-Path $zipFull -Leaf
    $assetUrl = "https://github.com/$Repo/releases/download/$Tag/$assetName"
    $today = Get-Date -Format "yyyy-MM-dd"

    Write-Host ""
    Write-Host "[ok] Release published" -ForegroundColor Green
    Write-Host "  Page: https://github.com/$Repo/releases/tag/$Tag"
    Write-Host "  Asset: $assetUrl"
    Write-Host ""
    Write-Host "[next] Fill downloads[] in manifest.json and products.json:" -ForegroundColor Yellow

    $jsonHint = @"
{
  "os": "win",
  "url": "$assetUrl",
  "size": $zipSize,
  "updatedAt": "$today"
}
"@
    Write-Host $jsonHint
} else {
    Write-Host "[ERR] gh exit $rc. Common causes: tag exists (add -Replace), zip path wrong, no repo permission." -ForegroundColor Red
    exit $rc
}
