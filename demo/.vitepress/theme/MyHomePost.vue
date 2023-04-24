<script setup lang="ts">
import type { Post } from '@jcamp/vitepress-blog-theme'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article
    class="rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"
  >
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
    >
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <p class="mb-5 font-light" v-html="post.excerpt" />
    <div class="flex items-center justify-between">
      <a
        :href="post.url"
        class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
      >
        Read more
        <div class="i-[bx/right-arrow-alt] ml-2" />
      </a>
    </div>
  </article>
</template>
