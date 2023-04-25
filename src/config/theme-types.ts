import type { DefaultTheme } from 'vitepress'

export interface Author {
  name: string
  url: string
  avatar?: string
  gravatar?: string
  twitter?: string
  excerpt: string | undefined
}

export interface Post {
  title: string
  author: string
  url: string
  category: string
  tags: string[]
  date: {
    raw: string
    time: number
    formatted: string
    since: string
  }
  excerpt: string | undefined
}

export interface VPBFeedConfig {
  /**
   * baseUrl
   *
   * @example 'https://vitepress.site/blog'
   * @default 'localhost/blog'  Feed won't have accurate links
   */
  baseUrl?: string

  /**
   * The output path for the generated feed file
   *
   * @example '/blog/feed.rss'
   * @default '/feed.rss'
   */
  outputPath?: string

  /**
   * The title of the feed
   *
   * @example 'My Blog Feed'
   * @default blog.title
   */
  title?: string

  /**
   * The description of the feed
   *
   * @example 'My Blog Feeds Description'
   * @default blog.description
   */
  description?: string

  /**
   * The id of the feed
   *
   * @default baseUrl
   */
  id?: string

  /**
   * The link of the feed
   *
   * @default baseUrl
   */
  link?: string

  /**
   * The language of the feed
   *
   * @default 'en'
   */
  language?: string

  /**
   * The image of the feed
   *
   * @default ''
   */
  image?: string

  /**
   * The favicon used in the RSS feed, added to the baseUrl
   *
   * @example '/feedfavicon.ico'
   * @default '/favicon.ico'
   */
  favicon?: string

  /**
   * The copyright used in the RSS feed
   *
   * @example 'Copyright (c) 2023-present, Me and blog contributors'
   */
  copyright?: string
}

export interface VPBBlogConfig {
  /**
   * The title of the blog
   *
   * @example 'My Blog'
   */
  title?: string

  /**
   * The description of the blog, used as a subtitle on the blog's home page
   *
   * @example 'My Interesting Content'
   */
  description?: string

  /**
   * The blog's path relative to the site
   *
   * @example '/myblog'
   * @default '/blog'
   */
  path?: string

  /**
   * The posts path
   *
   * @example '/myposts'
   * @default '/blog/posts'
   */
  postsPath?: string

  /**
   * The authors path
   *
   * @example '/myauthors'
   * @default '/blog/authors'
   */
  authorsPath?: string

  /**
   * The tags path
   *
   * @example '/mytags'
   * @default '/blog/tags'
   */
  tagsPath?: string

  /**
   * The default author name to use on posts without an author
   *
   * @example 'My Name'
   * @default 'Unknown'
   */
  defaultAuthor?: string

  /**
   * The default category name to use on posts without a category
   *
   * @example 'Posts'
   * @default 'Article'
   */
  defaultCategory?: string

  /**
   * Config options related to the blog's generated RSS feed
   *
   */
  feed?: VPBFeedConfig

  /**
   * Category icons, used in category's class attribute
   * @example {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/document]',
      }
   */
  categoryIcons?: Record<string, string>

  /**
   * Tag icons, used in tag's class attribute
   *
   */
  tagIcons?: Record<string, string>
}

export interface VPBThemeConfig extends DefaultTheme.Config {
  /**
   * Config options related to the blog
   *
   */
  blog?: VPBBlogConfig
}
