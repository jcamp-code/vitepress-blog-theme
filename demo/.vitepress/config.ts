import path from 'node:path'
import type { VPBThemeConfig } from '@jcamp/vitepress-blog-theme'
import { defineConfigWithTheme } from 'vitepress'
import { genFeed, processData } from '@jcamp/vitepress-blog-theme/config'
// can't use here
// import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPBThemeConfig>({
  vite: {
    build: {
      minify: false,
    },
    resolve: {
      alias: {
        '@jcamp/vitepress-blog-theme/config': path.join(
          __dirname,
          '../../src/config'
        ),
        '@jcamp/vitepress-blog-theme': path.join(__dirname, '../../src/theme'),
      },
    },
  },
  title: 'VitePress Blog Demo',
  description: 'A VitePress Blog Theme',
  themeConfig: {
    blog: {
      title: 'My AI Written Blog',
      description: 'All these articles were written by AI!',
      defaultAuthor: 'AI Writer',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
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
    await processData(pageData, ctx)
  },
})
