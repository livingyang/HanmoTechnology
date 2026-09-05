/**
 * products 数据源
 *
 * 来源：仓库根的 products.json（注册表），由 Hub 仓库 owner 维护。
 * 此处采用构建时静态 import —— 比 fetch 更适合静态站点，
 * 首屏即拿到数据、无跨域、无 hydration 抖动。
 *
 * 对应规范：HanmoTechnology/DEMO-HOSTING.md v3.0
 */

import productsJson from '../../../products.json'

export interface ProductEntry {
  /** slug：与 GitHub 仓库同名 */
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
  /** manifest.json 在 demos/ 下的入口路径 */
  entry: string
  /** 缩略图文件名（相对 entry 路径） */
  thumbnail: string
  /** 版本（semver） */
  version: string
  /** 状态：demo 场景默认 alpha */
  status: 'alpha' | 'beta' | 'released' | 'archived'
  /** 是否允许 iframe 嵌入 */
  embeddable?: boolean
  /** iframe sandbox */
  sandbox?: string
  /** 仓库 URL */
  homepage?: string
  /** 排序权重（数字小者靠前） */
  order?: number
}

export interface ProductsRegistry {
  schemaVersion: string
  products: ProductEntry[]
}

export const products: ProductEntry[] = (productsJson as ProductsRegistry).products
  .slice()
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

/**
 * 计算 demo iframe 的绝对 src（指向 HanmoTechnology/demos/<slug>/）
 */
export function demoSrc(slug: string): string {
  return `${import.meta.env.BASE_URL}demos/${slug}/`
}

/**
 * 计算 demo 缩略图的绝对 src
 */
export function demoThumbSrc(slug: string, thumbnail: string): string {
  return `${import.meta.env.BASE_URL}demos/${slug}/${thumbnail}`
}