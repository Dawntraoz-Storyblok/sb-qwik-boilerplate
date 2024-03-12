# Storyblok 5-minute Qwik starter

> This template should help get you started developing a headless app using [Storyblok JS SDK](https://github.com/storyblok/storyblok-js), Qwik in Vite.

You can find the full writen tutorial on [Add a headless CMS with Live Preview to Qwik in 5 Minutes](https://www.storyblok.com/tp/add-a-headless-cms-with-live-preview-to-qwik-in-5-minutes).

## Requirements

To be able to run this project you need to have a Storyblok account. If you don't have one yet, you can register for free at [Storyblok](https://www.storyblok.com/). Did I mention it's free?.

## How to get started?

To use this starter application, follow these steps:

1. Clone this repository
2. Install dependencies with `pnpm install`
3. Add the preview token from your Storyblok space to the `.env` file

```
PUBLIC_STORYBLOK_TOKEN=W1vLyxT5rQ15jBpANjnv0gtt
```

4. Run the project with `pnpm start`
5. Open your browser and go to `https://localhost:5173/`

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
pnpm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Compile and Minify Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build # or `yarn build`
```

### Production build -> Preview locally

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
pnpm preview # or `yarn preview`
```

### Resources

- [Storyblok JS SDK](https://github.com/storyblok/storyblok-js)
- [Qwik Docs](https://qwik.builder.io/)
- [Add a headless CMS with Live Preview to Qwik in 5 Minutes](https://www.storyblok.com/tp/add-a-headless-cms-with-live-preview-to-qwik-in-5-minutes)
