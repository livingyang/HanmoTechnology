/**
 * products 数据源
 *
 * 来源：仓库根的 products.json（注册表），由 Hub owner 维护。
 * 此处采用构建时静态 import —— 比 fetch 更适合静态站点，
 * 首屏即拿到数据、无跨域、无 hydration 抖动。
 *
 * 对应规范：DEMO-HOSTING.md
 */

import productsJson from '../../../products.json'

/**
 * 单个离线包条目（Electron zip / 未来其他平台）
 * 对应规范：DEMO-HOSTING.md §9.5
 */
export interface ProductDownload {
  /** 目标平台 */
  os: 'win' | 'mac' | 'linux'
  /** zip 文件相对 demo 产物目录的路径，如 "downloads/HanmoXxx-v0.x.y-win.zip" */
  url: string
  /** zip 字节数（正整数），用于按钮显示 "XXX MB" */
  size: number
  /** 打包日期 YYYY-MM-DD（可选） */
  updatedAt?: string
}

export interface ProductEntry {
  /** slug：产品英文 ID */
  slug: string
  /** 中文显示名 */
  name: string
  /** 英文显示名 */
  nameEn: string
  /** 一句话描述 */
  tagline: string
  /** 详细描述（markdown） */
  description?: string
  /** 标签 */
  tags?: string[]
  /** 分类：game / tool / demo */
  category?: 'game' | 'tool' | 'demo'
  /** 产物入口目录（相对 Hub 根的完整路径，结尾带斜杠），如 demos/HanmoIdleMMO/ */
  entry: string
  /** 缩略图完整路径（相对 Hub 根），如 demos/HanmoIdleMMO/thumbnail.svg */
  thumbnail: string
  /** 版本（semver） */
  version: string
  /** 状态：demo 场景默认 alpha */
  status: 'alpha' | 'beta' | 'released' | 'archived'
  /** 是否允许 iframe 嵌入 */
  embeddable?: boolean
  /** iframe sandbox */
  sandbox?: string
  /** 排序权重（数字小者靠前） */
  order?: number
  /** 注册日期 */
  addedAt?: string
  /** 最近更新日期 */
  updatedAt?: string
  /** 离线包清单（Electron zip 等），无则不渲染下载按钮 */
  downloads?: ProductDownload[]
}

export interface ProductsRegistry {
  schemaVersion: string
  products: ProductEntry[]
}

export const products: ProductEntry[] = (productsJson as ProductsRegistry).products
  .slice()
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

/**
 * 计算 demo 的绝对 src（entry 已是完整路径 demos/<slug>/）
 */
export function demoSrc(entry: string): string {
  return `${import.meta.env.BASE_URL}${entry}`
}

/**
 * 计算 demo 缩略图的绝对 src（thumbnail 已是完整路径 demos/<slug>/xxx.svg）
 */
export function demoThumbSrc(thumbnail: string): string {
  return `${import.meta.env.BASE_URL}${thumbnail}`
}

/**
 * 计算离线包下载链接（DEMO-HOSTING.md §9.5）
 * - url 以 http(s):// 开头（external，走官网仓 Release）→ 直接用，不拼前缀
 * - url 为相对路径（`downloads/xxx.zip`，docs/ 备选）→ 拼 BASE_URL + entry（entry 末尾有斜杠）
 * 例：entry="demos/HanmoIdleMMO/" + url="downloads/HanmoIdleMMO-v0.0.3-win.zip"
 *   → /HanmoTechnology/demos/HanmoIdleMMO/downloads/HanmoIdleMMO-v0.0.3-win.zip
 */
export function demoDownloadSrc(entry: string, url: string): string {
  if (/^https?:\/\//i.test(url)) return url
  return `${import.meta.env.BASE_URL}${entry}${url}`
}

/** 判断下载 url 是否为外部完整链接（走官网仓 Release） */
export function isExternalDownload(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

/** 把字节数格式化为 "XXX MB" / "X.X GB" */
export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '? MB'
  if (bytes < 1024 ** 2) return `${Math.round(bytes / 1024)} KB`
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(0)} MB`
  return `${(bytes / 1024 ** 3).toFixed(1)} GB`
}

/** 平台名 → 中文/英文显示标签 */
export function osLabel(os: ProductDownload['os']): string {
  return { win: 'Win', mac: 'Mac', linux: 'Linux' }[os] ?? os
}