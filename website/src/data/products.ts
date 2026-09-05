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