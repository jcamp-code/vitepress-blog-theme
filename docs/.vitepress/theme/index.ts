import type { EnhanceAppContext } from 'vitepress/client'
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'

export default {
  ...VPBTheme,
  // if you need to add more here, this is how to ensure the base theme's components are installed
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // call the base themes enhanceApp
    VPBTheme.enhanceApp({ app, router, siteData })
  },
}
