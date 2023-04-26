# Getting Started

## Try It Online

You can try VitePress Blog directly in your browser on [StackBlitz](https://stackblitz.com/github/jcamp-code/starter-vitepress-blog?file=README.md).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Terminal for accessing VitePress via its command line interface (CLI).
- Text Editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax support.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

VitePress Blog can be used on its own, or be installed into an existing project. You need to install both `vitepress` and `@jcamp/vitepress-blog-theme` In both cases, you can install it with:

::: code-group

```sh [npm]
$ npm install -D vitepress @jcamp/vitepress-blog-theme
```

```sh [pnpm]
$ pnpm add -D vitepress @jcamp/vitepress-blog-theme
```

```sh [yarn]
$ yarn add -D vitepress @jcamp/vitepress-blog-theme
```

:::

::: details Getting missing peer deps warnings?
If using PNPM, you will notice a missing peer warning for `@docsearch/js`. This does not prevent VitePress from working. If you wish to suppress this warning, add the following to your `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

:::

### Start Repo

We have a starter template repo available on GitHub:

https://github.com/jcamp-code/starter-vitepress-blog

You can click the large green `Use This Template` button GitHub or use `degit` to get started:

::: code-group

```sh [npm]
$ npx degit https://github.com/jcamp-code/starter-vitepress-blog
```

```sh [pnpm]
$ pnpm exec https://github.com/jcamp-code/starter-vitepress-blog
```

:::

### Setup Wizard

:::warning We are still working on the init wizard
:::

<!-- VitePress ships with a command line setup wizard that will help you scaffold a basic project. After installation, start the wizard by running:

::: code-group

```sh [npm]
$ npx vitepress-blog-init
```

```sh [pnpm]
$ pnpm exec vitepress-blog-init
```

:::

You will be greeted with a few simple questions:

<p>
  <img src="./vitepress-init.png" alt="vitepress init screenshot" style="border-radius:8px">
</p> -->

:::tip Vue as Peer Dependency
If you intend to perform customization that uses Vue components or APIs, you should also explicitly install `vue` as a peer dependency.
:::

### Posts and Authors

Files stored under `/blog/posts` are converted to blog posts, while files stored under `/blog/authors` are treated as author details. These paths can be configured as needed.

You can also set a default author if you don't want to specify an author for every post, for exmple, if there is only one author.

### Categories and Tags

The category is a top level item, and is optional. For example, this can be articles, documentation, tutorials, whatever you want it to be.

Tags are specified on each post and each post can have as many tags as you want.

### The Config File

The config file (`.vitepress/config.js`) allows you to customize various aspects of your VitePress site, with the most basic options being the title and description of the site:

```js
// .vitepress/config.js
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  },
}
```

## Up and Running

The tool should have also injected the following npm scripts to your `package.json` if you allowed it to do so during the setup process:

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

The `docs:dev` script will start a local dev server with instant hot updates. Run it with the following command:

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

:::

Instead of npm scripts, you can also invoke VitePress directly with:

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

:::

The dev server should be running at `http://localhost:5173`. Visit the URL in your browser to see your new site in action!

## What's Next?

- For full details of VitePress and its deployment, please refer to the [VitePress Guide](https://vitepress.dev/guide/getting-started)
