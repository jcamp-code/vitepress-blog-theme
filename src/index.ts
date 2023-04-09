// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ThemeLayout from './components/ThemeLayout.vue'
import TestThemeComponent from './components/TestThemeComponent.vue'
import './style.css'

export { default as TestThemeComponent } from './components/TestThemeComponent.vue'

export default {
  ...DefaultTheme,
  Layout: ThemeLayout,
  enhanceApp({ app, router, siteData }) {
    // call the base themes enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('TestThemeComponent', TestThemeComponent)
  },
} as Theme
