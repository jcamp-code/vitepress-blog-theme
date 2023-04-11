<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { useArchives } from '../composables/useArchives'

const { postsByYear } = useArchives()
const { theme } = useData()
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        {{ theme.blog?.title }} Archives
      </h2>
      <p
        class="font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"
      >
        {{ theme.blog?.description }}
      </p>
    </div>

    <div v-for="(year, yearIndex) in postsByYear" :key="yearIndex">
      <div
        class="px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
      >
        {{ year[0].date.raw.split('-')[0] }}
      </div>
      <a
        v-for="(post, index) in year"
        :key="index"
        :href="withBase(post.url)"
        class="m-2 flex cursor-pointer items-center justify-between leading-6 hover:text-[color:var(--vp-c-brand-dark)] dark:hover:text-[color:var(--vp-c-brand-light)]"
      >
        <div class="cursor-pointer leading-6">
          <div class="title-o"></div>
          {{ post.title }}
        </div>
        <div class="cursor-pointer font-sans leading-6">
          {{ post.date.raw.slice(5) }}
        </div>
      </a>
    </div>
  </div>
</template>
