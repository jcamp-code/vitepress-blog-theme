<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { VPBThemeConfig } from '..'

const { site } = useData()

const theme = site.value.themeConfig as VPBThemeConfig
const path = withBase(theme.blog?.path ?? '/blog/')
</script>

<template>
  <footer
    class="mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"
  >
    <div class="pt-3">
      <a class="link" :href="withBase(path)">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
