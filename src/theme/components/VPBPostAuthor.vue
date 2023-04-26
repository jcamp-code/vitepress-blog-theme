<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { usePosts } from '../composables/usePosts'
import { useAuthors } from '../composables/useAuthors'

defineProps<{
  insideDoc?: boolean
}>()

const { findByName } = useAuthors()
const { post } = usePosts()

const author = computed(() => {
  return findByName(post.value.author)
})
</script>

<template>
  <dl
    class="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200/5"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul
        class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
      >
        <li v-if="author" class="flex items-center space-x-2">
          <img
            v-if="author.gravatar"
            :src="`https://gravatar.com/avatar/${author.gravatar}`"
            alt="author image"
            class="h-10 w-10 rounded-full"
          />
          <img
            v-else-if="author.avatar"
            :src="author.avatar"
            alt="author image"
            class="h-10 w-10 rounded-full"
          />
          <dl class="whitespace-nowrap text-sm font-medium leading-5">
            <dt class="sr-only">Name</dt>
            <dd class="text-gray-900 dark:text-white">
              <a
                :href="withBase(author.url)"
                class="text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"
              >
                {{ author.name }}
              </a>
            </dd>
            <dt v-if="author.twitter" class="sr-only">Twitter</dt>
            <dd v-if="author.twitter">
              <a
                :href="`https://twitter.com/${author.twitter}`"
                target="_blank"
                rel="noopener noreferrer"
                >@{{ author.twitter }}</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
