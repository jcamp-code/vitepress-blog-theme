// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import VPBHome from './components/VPBHome.vue'
import VPBAuthorDetail from './components/VPBAuthorDetail.vue'
import VPBLayout from './components/VPBLayout.vue'
import VPBArchives from './components/VPBArchives.vue'
import VPBTags from './components/VPBTags.vue'
import VPBTestComponent from './components/VPBTestComponent.vue'

// components
export { default as VPBArchives } from './components/VPBArchives.vue'
export { default as VPBAuthorDetail } from './components/VPBAuthorDetail.vue'
export { default as VPBHome } from './components/VPBHome.vue'
export { default as VPBHomeAuthor } from './components/VPBHomeAuthor.vue'
export { default as VPBHomePost } from './components/VPBHomePost.vue'
export { default as VPBLayout } from './components/VPBLayout.vue'
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

export type * from './theme-types'

export default {
  ...DefaultTheme,
  Layout: VPBLayout,
  enhanceApp({ app, router, siteData }) {
    // call the base themes enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('VPBHome', VPBHome)
    app.component('VPBAuthorDetail', VPBAuthorDetail)
    app.component('VPBArchives', VPBArchives)
    app.component('VPBTags', VPBTags)
    app.component('VPBTestComponent', VPBTestComponent)
  },
} as Theme
