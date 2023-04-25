<script setup lang="ts">
import type { Post } from '../theme-types'
import VPBPostCategory from './VPBPostCategory.vue'
import VPBHomeAuthor from './VPBHomeAuthor.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article
    class="rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"
  >
    <div class="mb-5 flex items-center justify-between text-gray-500">
      <span
        class="bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
      >
        <VPBPostCategory :category="post.category">
          <span class="text-sm">{{ post.date.since }}</span>
        </VPBPostCategory>
      </span>
    </div>
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
    >
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="mb-5 font-light" v-html="post.excerpt"></div>
    <div class="flex items-center justify-between">
      <VPBHomeAuthor :name="post.author" />
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
