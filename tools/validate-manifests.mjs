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
//    出现即 [ERR]，exit 1 阻塞 commit——必须从 manifest.json 里删除后重跑。
//    修复方法：直接编辑 docs/demos/<slug>/manifest.json，删掉对应行。
//  - thumbnail / entry 文件必须存在
//  - downloads 数组（可选，DEMO-HOSTING.md §9.5）：存在时校验每项 os/url/size 必填、
//    os 必须是 win/mac/linux、size 为正整数、url 指向的文件必须物理存在
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

// downloads 数组（DEMO-HOSTING.md §9.5）— 仅在字段存在时校验，缺省不报错
const DOWNLOADS_REQUIRED_FIELDS = ['os', 'url', 'size'];
const SUPPORTED_OS = ['win', 'mac', 'linux'];

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

  // downloads 数组（DEMO-HOSTING.md §9.5）— 可选字段，存在才校验
  if (manifest.downloads !== undefined && manifest.downloads !== null) {
    if (!Array.isArray(manifest.downloads)) {
      console.error(`  [ERR] downloads 必须是数组`);
      errors++;
    } else {
      manifest.downloads.forEach((d, i) => {
        const label = `downloads[${i}]`;
        // 必填键
        for (const f of DOWNLOADS_REQUIRED_FIELDS) {
          if (d[f] === undefined || d[f] === null || d[f] === '') {
            console.error(`  [ERR] ${label}.${f} 缺失`);
            errors++;
          }
        }
        // os 枚举
        if (d.os && !SUPPORTED_OS.includes(d.os)) {
          console.error(`  [ERR] ${label}.os="${d.os}"（必须是 ${SUPPORTED_OS.join('/')}）`);
          errors++;
        }
        // size 必须为正整数
        if (d.size !== undefined && d.size !== null && (!Number.isInteger(d.size) || d.size <= 0)) {
          console.error(`  [ERR] ${label}.size=${d.size}（必须是正整数，字节数）`);
          errors++;
        }
        // url 指向的文件必须物理存在
        if (d.url) {
          const dp = join(slugDir, d.url);
          if (!existsSync(dp)) {
            console.error(`  [ERR] ${label} 下载文件不存在: ${d.url}`);
            errors++;
          }
        }
      });
    }
  }

  // 禁止字段（违反"主页禁源码"规则，参见 DEMO-HOSTING.md §3.3）
  // 升级为 [ERR]：commit 前必须清理，warn 永远没人看
  // 修复：编辑 docs/demos/<slug>/manifest.json，删除对应字段后重跑
  for (const f of FORBIDDEN_FIELDS) {
    if (manifest[f] !== undefined && manifest[f] !== null) {
      console.error(`  [ERR] forbidden field "${f}"=…（违反"主页禁源码"规则，参见 DEMO-HOSTING.md §3.3；修复：删除该字段后重跑）`);
      errors++;
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
