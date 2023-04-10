<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VPBLayoutPostTop from './VPBLayoutPostTop.vue'
import VPBLayoutPostBottom from './VPBLayoutPostBottom.vue'
import VPBLayoutAsideTop from './VPBLayoutPostAsideTop.vue'
import VPBLayoutAsideBottom from './VPBLayoutPostAsideBottom.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <VPBLayoutPostTop v-if="frontmatter.blog" />
    </template>
    <template #doc-footer-before>
      <VPBLayoutPostBottom v-if="frontmatter.blog" />
    </template>
    <template #aside-top>
      <VPBLayoutAsideTop v-if="frontmatter.blog" />
    </template>
    <template #aside-bottom>
      <VPBLayoutAsideBottom v-if="frontmatter.blog" />
    </template>
  </Layout>
</template>
