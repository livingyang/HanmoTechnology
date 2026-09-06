#!/usr/bin/env node
// Hanmo Technology Hub · docs/demos/manifest.json 校验脚本
// 用法：node tools/validate-manifests.mjs
//
// 规则：
//  - 扫描 docs/demos/<slug>/manifest.json
//  - 必填字段：schemaVersion, slug, name, nameEn, tagline, thumbnail, version, status, entry
//  - schemaVersion 推荐 3.0；其他版本给 warning，不阻塞
//  - slug 字段必须等于目录名
//  - status 必须是 alpha/beta/released/archived
//  - 禁止字段：homepage / repository / repo / source / code（违反"主页禁源码"规则）
//    出现即 warning（不阻塞 commit，但提示违反 DEMO-HOSTING.md §3.3）
//  - thumbnail 文件必须存在
//  - entry 文件必须存在
// 失败 → exit 1，阻塞本地构建产物提交（commit 时跑一次即可）。

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REQUIRED_FIELDS = [
  'schemaVersion', 'slug', 'name', 'nameEn', 'tagline',
  'thumbnail', 'version', 'status', 'entry',
];
const SUPPORTED_STATUS = ['alpha', 'beta', 'released', 'archived'];
const RECOMMENDED_SCHEMA_VERSION = '3.0';
const FORBIDDEN_FIELDS = ['homepage', 'repository', 'repo', 'source', 'code'];

const root = process.cwd();
const demosDir = join(root, 'docs', 'demos');

if (!existsSync(demosDir)) {
  console.log('[skip] no docs/demos/ directory in this repo');
  process.exit(0);
}

let slugs;
try {
  slugs = readdirSync(demosDir).filter(s => {
    try {
      return statSync(join(demosDir, s)).isDirectory();
    } catch {
      return false;
    }
  });
} catch (e) {
    console.error(`[FATAL] cannot read docs/demos/: ${e.message}`);
    process.exit(1);
  }

if (slugs.length === 0) {
  console.log('[skip] docs/demos/ is empty');
  process.exit(0);
}

let errors = 0;
let warnings = 0;

for (const slug of slugs) {
  const slugDir = join(demosDir, slug);
  const manifestPath = join(slugDir, 'manifest.json');

  console.log(`\n[${slug}]`);
  console.log(`  path: ${slugDir.replace(/\\/g, '/')}`);

  if (!existsSync(manifestPath)) {
    console.error('  [ERR] manifest.json 缺失');
    errors++;
    continue;
  }

  let manifest;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  } catch (e) {
    console.error(`  [ERR] manifest.json parse error: ${e.message}`);
    errors++;
    continue;
  }

  // 必填字段
  for (const f of REQUIRED_FIELDS) {
    if (manifest[f] === undefined || manifest[f] === null || manifest[f] === '') {
      console.error(`  [ERR] missing required field: ${f}`);
      errors++;
    }
  }

  // schemaVersion
  if (manifest.schemaVersion && manifest.schemaVersion !== RECOMMENDED_SCHEMA_VERSION) {
    console.warn(`  [WARN] schemaVersion=${manifest.schemaVersion}（推荐 ${RECOMMENDED_SCHEMA_VERSION}）`);
    warnings++;
  }

  // slug 一致性
  if (manifest.slug && manifest.slug !== slug) {
    console.error(`  [ERR] manifest.slug="${manifest.slug}" ≠ 目录名 "${slug}"`);
    errors++;
  }

  // status
  if (manifest.status && !SUPPORTED_STATUS.includes(manifest.status)) {
    console.error(`  [ERR] invalid status="${manifest.status}"（必须是 ${SUPPORTED_STATUS.join('/')}）`);
    errors++;
  }

  // thumbnail
  if (manifest.thumbnail) {
    const tp = join(slugDir, manifest.thumbnail);
    if (!existsSync(tp)) {
      console.error(`  [ERR] thumbnail 文件不存在: ${manifest.thumbnail}`);
      errors++;
    }
  }

  // entry
  if (manifest.entry) {
    const ep = join(slugDir, manifest.entry);
    if (!existsSync(ep)) {
      console.error(`  [ERR] entry 文件不存在: ${manifest.entry}`);
      errors++;
    }
  }

  // 禁止字段（违反"主页禁源码"规则，参见 DEMO-HOSTING.md §3.3）
  // 不阻塞 commit，仅 warning，下次同步清理时移除
  for (const f of FORBIDDEN_FIELDS) {
    if (manifest[f] !== undefined && manifest[f] !== null) {
      console.warn(`  [WARN] forbidden field "${f}"=…（违反"主页禁源码"规则，参见 DEMO-HOSTING.md §3.3；下次同步时移除）`);
      warnings++;
    }
  }

  // 总结
  console.log(`  [ok]   v${manifest.version || '?'} (${manifest.status || '?'})`);
}

console.log(`\n=== 校验完成 ===`);
console.log(`  products: ${slugs.length}`);
console.log(`  errors:   ${errors}`);
console.log(`  warnings: ${warnings}`);

if (errors > 0) {
  console.error(`\n✗ 校验失败，请修复后再提交`);
  process.exit(1);
} else {
  console.log(`\n✓ 全部通过`);
  process.exit(0);
}
