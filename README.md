# Svelte Web Component Library

Based on sinedied's [svelte-web-components-template](https://github.com/sinedied/svelte-web-components-template).

### ⚠️ Early Version Warning

_This is an early version. Documentation and features are still in development. Feel free to use and collaborate._

<br>

This template makes it easy to create, preview, and build your web component library with Svelte.

![Banner preview](https://github.com/SjorsWijsman/svelte-web-component-library/blob/main/docs/swct-banner.PNG?raw=true)

Svelte allows compiling to web components, enabling you to create reusable components that can be imported and used in any HTML environment. However, the developer experience can be challenging due to the need to rebuild and reload the page to see changes. Issues with HMR (Hot Module Replacement), documentation, etc., can also be problematic. This template aims to alleviate these issues and make it easier to create web components with Svelte. [Read more about creating web components with Svelte here](https://svelte.dev/docs/custom-elements-api).

<br>

## Installing the Library

Clone this template or run:

```bash
npx degit SjorsWijsman/svelte-web-component-library#main svelte-web-component-library
cd svelte-web-component-library
npm install
```

_Note that both the `/demo` and `/web-components` folders contain their own package that needs to be installed. The `postinstall` script should automatically handle this._

<br>

## Creating a New Component

Run the following command to start the development server:

```bash
npm run dev -- --open
```

The dev server will automatically open in your preferred browser and start additional tooling to help you create components, with console messages prefixed by `[svelte-wc]`.

After starting the dev server, you can begin creating your first web component!

### .wc.svelte

New components are created inside the `/web-components/lib/components` folder. You should see some examples already inside. Start by creating a new file called `MyComponent.wc.svelte` in this folder.

If the dev server is running, the `customElements` tag will automatically be added to the file. This is required for Svelte to recognize a component as a web component. In this case, the tag is generated as `"wc-my-component"`. `"wc"` is the default prefix for this template, which can be changed in the `web-components.config.js` file. Any file with the `.wc.svelte` extension is automatically added to the `index.js` file for export.

### .demo.js

You might have noticed that our new component doesn't yet show up in the component library frontend. To preview our component, a `.demo.js` file needs to be created. Name it the same as its respective `.wc.svelte` file: `MyComponent.demo.js`. The file will be automatically filled with some boilerplate, and the component will now appear in the frontend. Any changes to the `.wc.svelte` component will be automatically reflected in the demo environment, making it easy to develop your component. Inside the `.demo.js` file, you can add a description and define the props and slots the component exposes. Here’s a basic example with two props and a default slot:

```javascript
// web-components/lib/components/ExampleComponent.demo.js
export const demo = {
	description: "An example demo component",
	props: {
		color: {
			type: "select",
			options: ["red", "green", "blue"],
			default: "red"
		},
		underline: {
			type: "boolean"
		}
	},
	slots: {
		default: "World"
	}
};

export default demo;
```

Any created file with the `.demo.js` extension is automatically added to the `demo.js` file for export.

### Component Props

Props defined in your Svelte component can be added to the demo environment by including them in the respective `.demo.js` file. To define a prop, add a new object to the `props` object. The key should match the prop name, but you can't use camelCase due to web component limitations. The prop can have a type and a default value. The following prop types are allowed:
| Type | Allowed Value | Notes |
|----------|---------------|-------------------------------------------------------------|
| (default)| String | If type is undefined, it defaults to a regular input field. |
| select | String | Select requires an additional `options` list. |
| boolean | Boolean | |
| textarea | String | |

_Other values will "fall through" and be passed as a type to an input field. You can, for example, use `type: "color"` or `type: "password"`._

```javascript
// web-components/lib/components/MyComponent.demo.js
...
    props: {
        text: {},
        state: {
            type: "select",
			options: ["primary", "secondary", "blue"],
			default: "red"
		},
		disabled: {
			type: "boolean"
		},
        tooltip: {
            type: "textarea",
            default: "Tooltip content"
        },
    },
...
```

### Component Slots

Slots are defined similarly to props, with the key acting as the title of the slot and the value as the slot content. This can include HTML tags or other web components. Use the `"default"` keyword for unnamed slots:

```javascript
// web-components/lib/components/MyComponent.demo.js
...
	slots: {
        header: "Hello",
        default: "World"
	}
...
```

<br>

## Building & Importing Your Component Library

-   Run `npm run build` to build your component library to the `/dist/` folder.
-   To automatically run a build when changes occur, use `npm run build:watch`.
-   You can change the output folder by updating the `outDir` property in `/web-components/web-components.config.js`.
-   To build each component into a separate file, set `bundleComponents` to `false` in `/web-components/web-components.config.js`.
