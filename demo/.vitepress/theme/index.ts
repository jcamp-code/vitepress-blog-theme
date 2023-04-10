import Theme from 'vitepress-blog-theme'
import './style.css'

export default {
  ...Theme,
  // if you need to add more here, this is how to ensure the base theme's components are installed
  // enhanceApp({ app, router, siteData }) {
  //   // call the base themes enhanceApp
  //   Theme.enhanceApp({ app, router, siteData })
  // },
}
