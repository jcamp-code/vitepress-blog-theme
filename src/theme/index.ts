// https://vitepress.dev/guide/custom-theme
import type { Component } from 'vue'
import type { Awaitable } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress/client'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import VPBHome from './components/VPBHome.vue'
import VPBLayout from './components/VPBLayout.vue'
import VPBArchives from './components/VPBArchives.vue'
import VPBTags from './components/VPBTags.vue'
import VPBTestComponent from './components/VPBTestComponent.vue'
import VPBHomePost from './components/VPBHomePost.vue'

// components
export { default as VPBArchives } from './components/VPBArchives.vue'
export { default as VPBHome } from './components/VPBHome.vue'
export { default as VPBHomeAuthor } from './components/VPBHomeAuthor.vue'
export { default as VPBHomePost } from './components/VPBHomePost.vue'
export { default as VPBLayout } from './components/VPBLayout.vue'
export { default as VPBLayoutAuthorAsideBottom } from './components/VPBLayoutAuthorAsideBottom.vue'
export { default as VPBLayoutAuthorTop } from './components/VPBLayoutAuthorTop.vue'
export { default as VPBLayoutPostAsideBottom } from './components/VPBLayoutPostAsideBottom.vue'
export { default as VPBLayoutPostAsideTop } from './components/VPBLayoutPostAsideTop.vue'
export { default as VPBLayoutPostBottom } from './components/VPBLayoutPostBottom.vue'
export { default as VPBLayoutPostTop } from './components/VPBLayoutPostTop.vue'
export { default as VPBPostAuthor } from './components/VPBPostAuthor.vue'
export { default as VPBPostCategory } from './components/VPBPostCategory.vue'
export { default as VPBPostDate } from './components/VPBPostDate.vue'
export { default as VPBPostDetails } from './components/VPBPostDetails.vue'
export { default as VPBPostLinks } from './components/VPBPostLinks.vue'
export { default as VPBTagIcon } from './components/VPBTagIcon.vue'
export { default as VPBTags } from './components/VPBTags.vue'
export { default as VPBTestComponent } from './components/VPBTestComponent.vue'

// composables
export { useArchives } from './composables/useArchives'
export { useAuthors } from './composables/useAuthors'
export { usePosts } from './composables/usePosts'
export { useTags } from './composables/useTags'

interface VPBTheme {
  Layout: Component
  enhanceApp: (ctx: EnhanceAppContext) => Awaitable<void>
  extends?: Theme
}

const theme = {
  ...DefaultTheme,
  Layout: VPBLayout,
  enhanceApp({ app, router, siteData }) {
    // call the base themes enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('VPBHome', VPBHome)
    app.component('VPBArchives', VPBArchives)
    app.component('VPBTags', VPBTags)
    app.component('VPBTestComponent', VPBTestComponent)
    app.component('VPBHomePost', VPBHomePost)
  },
} as VPBTheme

export { theme as VPBTheme }
export type * from './theme-types'
