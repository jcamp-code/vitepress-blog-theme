<script setup lang="ts">
import { withBase } from 'vitepress'
import { useAuthors } from '../composables/useAuthors'

const { author, prevAuthor, nextAuthor } = useAuthors()
</script>

<template>
  <div>
    <div class="mb-1 flex items-center justify-between text-gray-500">
      <img
        v-if="author.gravatar"
        :src="`https://gravatar.com/avatar/${author.gravatar}`"
        alt="author image"
        class="h-20 w-20 rounded-full"
      />
      <img
        v-else-if="author.avatar"
        :src="author.avatar"
        alt="author image"
        class="h-20 w-20 rounded-full"
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
</template>
