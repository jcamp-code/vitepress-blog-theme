import { type SiteConfig, createContentLoader } from 'vitepress'
import type { Author, VPBThemeConfig } from '..'

// @ts-expect-error globalThis is not typed
const config = globalThis.VITEPRESS_CONFIG as SiteConfig<VPBThemeConfig>
const blogConfig = config.site.themeConfig.blog

const pattern = `${blogConfig?.authorsPath ?? '/blog/authors'}/**/*.md`

const data = [] as Author[]
export { data }

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        avatar: frontmatter.avatar ?? null,
        gravatar: frontmatter.gravatar ?? null,
        twitter: frontmatter.twitter ?? null,
        url,
        excerpt,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
