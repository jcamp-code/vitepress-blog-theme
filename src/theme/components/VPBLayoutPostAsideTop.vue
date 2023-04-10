<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
import VPBPostAuthor from './VPBPostAuthor.vue'
import VPBPostCategory from './VPBPostCategory.vue'
const { post } = usePosts()
</script>

<template>
  <span
    class="bg-primary-100 inline-flex items-center rounded text-sm font-medium"
  >
    <VPBPostCategory :category="post.category"></VPBPostCategory>
  </span>
  <VPBPostAuthor />
</template>
