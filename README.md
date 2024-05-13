# 📚 svelte-web-component-library

> Based on sinedied's [svelte-web-components-template](https://github.com/sinedied/svelte-web-components-template).

This template makes it easy to create, preview and build your web component library with Svelte.

![Banner preview](https://github.com/SjorsWijsman/svelte-web-component-library/blob/main/docs/swct-banner.PNG?raw=true)

## Getting started

Clone this template or run:

```bash
npx degit SjorsWijsman/svelte-web-component-library#main svelte-web-component-library
cd svelte-web-component-library
npm install
```

## Previewing the component

## Building & importing your component library

Run `npm run build` to build your component library to the `/dist/` folder.
If you want to automatically run a build when a change has occured, run `npm run build:watch`.
You can change the output folder by updating the `outDir` property inside `/web-components/web-components.config.js`.
Build every component to a separate file by changing `bundleComponents` inside `/web-components/web-components.config.js` to `false`.
