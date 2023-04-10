import { type SiteConfig } from 'vitepress'
import type { VPBThemeConfig } from '../theme/theme-types'
declare function genFeed(config: SiteConfig<any>): Promise<void>

export { genFeed }
