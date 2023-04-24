<script setup lang="ts">
import { useData } from 'vitepress'
import { usePosts } from '../composables/usePosts'
// import VPBHomePost from './VPBHomePost.vue'

const { posts } = usePosts()

const { theme } = useData()

const postComponent = theme?.value?.blog?.postComponent ?? 'VPBHomePost'
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:px-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        {{ theme.blog?.title }}
      </h2>
      <p
        class="font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"
      >
        {{ theme.blog?.description }}
      </p>
    </div>
    <div class="grid gap-6 p-2 lg:grid-cols-2">
      <div v-for="post of posts" :key="post.url">
        <Component :is="postComponent" :post="post" />
      </div>
    </div>
  </div>
</template>
