<script setup lang="ts">
import { usePosts } from '../composables/usePosts'

defineProps<{
  insideDoc?: boolean
}>()

const { nextPost, prevPost } = usePosts()
</script>

<template>
  <footer
    class="mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"
    :class="{ 'xs:show lg:hidden': insideDoc }"
  >
    <div v-if="nextPost" class="py-3">
      <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-white">
        Next Article
      </h2>
      <div class="link">
        <a :href="`${nextPost.url}`">{{ nextPost.title }}</a>
      </div>
    </div>
    <div v-if="prevPost" class="py-3">
      <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-white">
        Previous Article
      </h2>
      <div class="link">
        <a :href="`${prevPost.url}`"> {{ prevPost.title }}</a>
      </div>
    </div>
    <div class="pt-3">
      <a class="link" href="/">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
