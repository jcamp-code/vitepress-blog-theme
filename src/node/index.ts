import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { type SiteConfig, createContentLoader } from 'vitepress'
import type { VPBThemeConfig } from '../theme/theme-types'

export async function genFeed(config: SiteConfig<VPBThemeConfig>) {
  const blogConfig = config.site.themeConfig.blog ?? {}
  const feedConfig = blogConfig.feed ?? {}
  const baseUrl = feedConfig.baseUrl ?? 'localhost/blog'

  const feed = new Feed({
    title: feedConfig.title ?? blogConfig.title ?? '',
    description: feedConfig.description ?? blogConfig.description ?? '',
    id: feedConfig.id ?? baseUrl,
    link: feedConfig.link ?? baseUrl,
    language: feedConfig.language ?? 'en',
    image: feedConfig.image ?? '',
    favicon: feedConfig.favicon ?? `${baseUrl}/favicon.ico`,
    copyright: feedConfig.copyright ?? '',
  })

  const pattern = blogConfig.postsPattern ?? '/blog/posts/*.md'
  const output = feedConfig.outputPath ?? '/feed.rss'

  const posts = await createContentLoader(pattern, {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined,
        },
      ],
      date: frontmatter.date,
    })
  }

  writeFileSync(path.join(config.outDir, output), feed.rss2())
}
