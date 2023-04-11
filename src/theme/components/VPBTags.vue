<script setup lang="ts">
import { inBrowser, useData, withBase } from 'vitepress'
import { ref } from 'vue'
import { useTags } from '../composables/useTags'
import VPBTagIcon from './VPBTagIcon.vue'

const { postsByTag } = useTags()
const { theme } = useData()
const selectedTag = ref('')

function toggleTag(tag: string) {
  selectedTag.value = tag
}
if (inBrowser) {
  const params = new URLSearchParams(window.location.search)
  const init = params.get('init') // returns the number 123
  if (init) {
    toggleTag(init)
  }
}
</script>

<template>
  <ClientOnly>
    <div class="mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16">
      <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
        >
          {{ theme.blog?.title }} Tags
        </h2>
        <p
          class="font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"
        >
          {{ theme.blog?.description }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-2 p-4">
        <div
          v-for="(posts, tagName) in postsByTag"
          :key="tagName"
          :class="{
            'cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600':
              selectedTag !== tagName,
            'rounded-full bg-[color:var(--vp-c-brand-light)] px-3 py-1 text-sm font-semibold text-gray-100 dark:bg-[color:var(--vp-c-brand-dark)]':
              selectedTag === tagName,
          }"
          @click="toggleTag(tagName)"
        >
          <VPBTagIcon :tag="tagName" />
          {{ tagName }}
          <span
            :class="{
              'ml-3 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]':
                selectedTag !== tagName,
              'ml-3 text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)]':
                selectedTag === tagName,
            }"
            >{{ posts.length }}</span
          >
        </div>
      </div>

      <div v-if="selectedTag">
        <div
          class="px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
        >
          <VPBTagIcon :tag="selectedTag" />{{ selectedTag }}
          <span class="text-xs"> ( {{ postsByTag[selectedTag].length }} )</span>
        </div>
        <a
          v-for="(post, index) in postsByTag[selectedTag]"
          :key="index"
          :href="withBase(post.url)"
          class="m-2 flex cursor-pointer items-center justify-between leading-6"
        >
          <div class="cursor-pointer leading-6">
            <div class="title-o"></div>
            {{ post.title }}
          </div>
          <div class="cursor-pointer font-sans leading-6">
            {{ post.date.raw }}
          </div>
        </a>
      </div>
    </div>
  </ClientOnly>
</template>
