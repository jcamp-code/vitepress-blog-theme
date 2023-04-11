<script setup lang="ts">
import { usePosts } from '../composables/usePosts'
import VPBPostDate from './VPBPostDate.vue'
import VPBPostDetails from './VPBPostDetails.vue'

const { post } = usePosts()
</script>

<template>
  <header class="space-y-1 pt-6 text-center xl:pb-10">
    <VPBPostDate />
    <h1
      class="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)] sm:text-4xl sm:leading-10 md:text-5xl"
    >
      {{ post.title }}
    </h1>
  </header>
  <VPBPostDetails inside-doc />
</template>
