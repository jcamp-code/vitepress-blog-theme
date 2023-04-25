import type { Config } from 'tailwindcss'
import {
  type PageData,
  type SiteConfig,
  type TransformPageContext,
  type UserConfig,
} from 'vitepress'
import type { VPBThemeConfig } from './theme-types'
export declare function genFeed(
  siteConfig: SiteConfig<VPBThemeConfig>
): Promise<void>
export declare function processData(
  pageData: PageData,
  ctx: TransformPageContext,
  aside?: string,
  sidebar?: boolean
): Promise<void>
/**
 * Type config helper
 */
export declare function defineConfig(
  config: UserConfig<VPBThemeConfig>
): UserConfig<VPBThemeConfig>
export declare const tailwindContent: string[]
export declare function defineTailwindConfig(config: Partial<Config>): Config
