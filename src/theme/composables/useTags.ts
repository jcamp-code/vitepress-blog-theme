import type { Post } from '../theme-types'
import { data as posts } from './posts.data'

export function useTags() {
  const postsByTag = {} as Record<string, Post[]>
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const tags = post.tags
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(post)
      })
    }
  }
  return { postsByTag }
}
