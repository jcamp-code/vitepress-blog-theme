// import { tailwindContent } from '@jcamp/vitepress-blog-theme/node'

const icons = require('@jcamp/tailwindcss-plugin-icons')

export const tailwindContent = [
  './src/theme/**/*.{js,ts,vue}',
  './demo/**/*.md',
  './demo/.vitepress/**/*.{js,ts,vue}',
]

module.exports = {
  content: [...tailwindContent],
  darkMode: 'class',
  plugins: [icons()],
}
