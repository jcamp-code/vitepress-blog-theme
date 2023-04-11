<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { useAuthors } from '../composables/useAuthors'

const { site } = useData()

const { author, prevAuthor, nextAuthor } = useAuthors()
</script>

<template>
  <div>
    <div>
      <div>
        <div class="mb-1 flex items-center justify-between text-gray-500">
          <img
            class="h-10 w-10 rounded-full"
            :src="author.avatar"
            :alt="author.name"
          />
          <span
            class="ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
          >
            {{ author.name }}
          </span>
        </div>
        <div class="mt-4 flex items-center justify-between text-gray-500">
          <a
            v-if="prevAuthor"
            :href="withBase(prevAuthor.url)"
            class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"
          >
            <div class="i-[bx/arrow-back] mr-2" />
            <span>Previous Author</span>
          </a>
          <div v-if="!prevAuthor" />
          <a
            v-if="nextAuthor"
            :href="withBase(nextAuthor.url)"
            class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"
          >
            <span>Next Author</span>
            <div class="i-[bx/right-arrow-alt] ml-2" />
          </a>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-doc h1,
h2,
h3,
hr {
  margin: 12px 0 0 0;
}
</style>
