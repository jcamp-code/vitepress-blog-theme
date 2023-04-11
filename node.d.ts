import type { PageData, SiteConfig, TransformPageContext } from 'vitepress'
import type { VPBThemeConfig } from '../theme/theme-types'
export declare const tailwindContent: string[]
export declare function processPosts(
  pageData: PageData,
  ctx: TransformPageContext,
  aside?: string,
  sidebar?: boolean
): Promise<void>
export declare function genFeed(
  config: SiteConfig<VPBThemeConfig>
): Promise<void>
