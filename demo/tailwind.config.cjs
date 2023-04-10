// eslint-disable-next-line @typescript-eslint/no-var-requires
const icons = require('@jcamp/tailwindcss-plugin-icons')

module.exports = {
  content: [
    './node_modules/vitepress-blog-theme/dist/**/*.{js,ts,vue}',
    './*.md',
    './blog/**/*.md',
    './.vitepress/**/*.{js,ts,vue}',
  ],
  darkMode: 'class',
  plugins: [
    icons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        width: '1.2em',
        height: '1.2em',
      },
    }),
  ],
}
