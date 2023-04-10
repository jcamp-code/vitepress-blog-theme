import { computed } from 'vue'
import { useRoute } from 'vitepress'
import type { Author } from '../theme-types'
import { data as authors } from './authors.data'

export function useAuthors() {
  const route = useRoute()

  const path = route.path

  function findByName(name: string): Author | undefined {
    return authors.find((p: Author) => p.name === name)
  }

  function findCurrentIndex() {
    const result = authors.findIndex((p: Author) => p.url === route.path)
    if (result === -1) console.error(`author page missing: ${route.path}`)
    return result
  }

  const author = computed(() => authors[findCurrentIndex()])
  const nextAuthor = computed(() => authors[findCurrentIndex() - 1])
  const prevAuthor = computed(() => authors[findCurrentIndex() + 1])

  return { authors, author, nextAuthor, prevAuthor, findByName, path }
}
