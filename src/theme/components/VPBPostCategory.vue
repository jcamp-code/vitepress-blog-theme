<script setup lang="ts">
import { useData } from 'vitepress'
import type { VPBThemeConfig } from '../theme-types'

defineProps<{
  category: string
}>()
const { theme } = useData<VPBThemeConfig>()
</script>

<template>
  <div>
    <div
      v-if="
        theme.blog?.categoryIcons &&
        theme.blog.categoryIcons[category.toLowerCase()]
      "
      :class="theme.blog.categoryIcons[category.toLowerCase()]"
      class="mr-2"
    />
    <span>{{ category }}</span>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
