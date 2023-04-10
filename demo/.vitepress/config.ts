import { defineConfigWithTheme } from 'vitepress'
import type { VPBThemeConfig } from 'vitepress-blog-theme'
import { genFeed } from 'vitepress-blog-theme/node'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPBThemeConfig>({
  title: 'VitePress Blog Demo',
  description: 'A VitePress Blog Theme',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Theme Test', link: '/theme-test' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jcamp-code/vitepress-blog-theme',
      },
    ],
  },
  buildEnd: genFeed,
  async transformPageData(pageData, ctx) {
    const config = ctx?.siteConfig?.site?.themeConfig as VPBThemeConfig
    const pattern =
      config.blog?.postsPattern?.replace('/*.md', '') ?? 'blog/posts'
    if (pageData.relativePath.includes(pattern)) {
      pageData.frontmatter.blog = 'blog'
      pageData.frontmatter.aside = 'left'
      pageData.frontmatter.sidebar = false
    }
  },
})
