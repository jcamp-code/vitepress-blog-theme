# VPB Theme Config

This section will explain the configuration options provided by VitePress Blog. All of the standard [VitePress configuration options](https://vitepress.dev/reference/site-config) are available as well.

VPB's Theme config lets you customize your theme. All of our config options are available under the `themeConfig.blog` property of the standard VitePress config:

```ts
export default defineConfig({
  // standard VitePress config here
  themeConfig: {
    // standard VitePress default theme config here
    blog: {
      // All of VitePress Blog config options.
      title: 'Blog Title',
      description: 'All these articles were written by me!',
      defaultAuthor: 'Me, Myself, and I',
    },
  },
})
```

**Note that in order to provide config typing, you must use the `defineConfig` provided by VitePress Blog**

```ts
import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

export default defineConfig({})
```

## title

- Type: `string | false`

You can customize this item to set the blog title.

```ts
export default {
  themeConfig: {
    blog: {
      title: 'Blog Title',
    },
  },
}
```
