<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VPBLayoutPostTop from './VPBLayoutPostTop.vue'
import VPBLayoutPostBottom from './VPBLayoutPostBottom.vue'
import VPBLayoutPostAsideTop from './VPBLayoutPostAsideTop.vue'
import VPBLayoutPostAsideBottom from './VPBLayoutPostAsideBottom.vue'
import VPBLayoutAuthorAsideBottom from './VPBLayoutAuthorAsideBottom.vue'
import VPBLayoutAuthorTop from './VPBLayoutAuthorTop.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <VPBLayoutPostTop v-if="frontmatter.blog === 'post'" />
      <VPBLayoutAuthorTop v-if="frontmatter.blog === 'author'" />
    </template>
    <template #doc-footer-before>
      <VPBLayoutPostBottom v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-top>
      <VPBLayoutPostAsideTop v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-bottom>
      <VPBLayoutPostAsideBottom v-if="frontmatter.blog === 'post'" />
      <VPBLayoutAuthorAsideBottom v-if="frontmatter.blog === 'author'" />
    </template>
  </Layout>
</template>
