import type { Post } from '../theme-types'
import { data as posts } from './posts.data'

export function useArchives() {
  const postsByYear = [] as Post[][]
  let year = '0'
  let num = -1
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    if (post.date) {
      const y = post.date.raw.split('-')[0]
      if (y === year) {
        postsByYear[num].push(post)
      } else {
        num++
        postsByYear[num] = [] as Array<Post>
        postsByYear[num].push(post)
        year = y
      }
    }
  }
  return { postsByYear }
}
