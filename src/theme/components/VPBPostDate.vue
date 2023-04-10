<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
const { post } = usePosts()

function getDateTime() {
  return new Date(post.value.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd
      class="text-base font-medium leading-6 text-gray-500 dark:text-gray-300"
    >
      <time :datetime="getDateTime()">{{ post.date.formatted }}</time>
    </dd>
  </dl>
</template>
