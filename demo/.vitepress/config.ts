import path from 'node:path'
import { createRequire } from 'node:module'
import type { VPBThemeConfig } from '@jcamp/vitepress-blog-theme'
import { defineConfigWithTheme } from 'vitepress'
import { genFeed, processData } from '@jcamp/vitepress-blog-theme/config'
// can't use here
// import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

const require = createRequire(import.meta.url)
const pkg = require('@jcamp/vitepress-blog-theme/package.json')

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
  title: 'VitePress Blog',
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
      {
        text: 'Guide',
        link: '/guide/what-is-vitepress-blog',
        activeMatch: '/guide/',
      },
      {
        text: 'Reference',
        link: '/reference/config',
        activeMatch: '/reference/',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown',
            link: '/markdown-examples',
          },
          {
            text: 'Theme Test',
            link: '/theme-test',
          },
        ],
      },
      {
        text: 'Blog',
        activeMatch: '/blog/',
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
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/jcamp-code/vitepress-blog-theme/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/jcamp-code/vitepress-blog-theme/blob/main/.github/contributing.md',
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

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

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        {
          text: 'What is VitePress Blog?',
          link: '/guide/what-is-vitepress-blog',
        },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Credits', link: '/guide/credits' },
      ],
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: '/guide/custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: '/guide/extending-default-theme',
        },
        { text: 'SSR Compatibility', link: '/guide/ssr-compat' },
      ],
    },
    {
      text: 'Config & API Reference',
      link: '/reference/config',
    },
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: '/reference/config' },
        { text: 'Tailwind', link: '/reference/tailwind' },
        { text: 'Icons', link: '/reference/icons' },
      ],
    },
  ]
}
