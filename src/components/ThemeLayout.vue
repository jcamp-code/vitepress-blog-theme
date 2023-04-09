<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <div>Before Doc Content</div>
    </template>
  </Layout>
</template>
