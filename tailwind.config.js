// import { tailwindContent } from '@jcamp/vitepress-blog-theme/node'

const icons = require('@jcamp/tailwindcss-plugin-icons')

export const tailwindContent = [
  './node_modules/@jcamp/vitepress-blog-theme/src/**/*.{js,ts,vue}',
  './src/theme/*.{js,ts,vue}',
  './demo/**/*.md',
  './demo/.vitepress/**/*.{js,ts,vue}',
]

module.exports = {
  content: [...tailwindContent],
  darkMode: 'class',
  plugins: [icons()],
}
