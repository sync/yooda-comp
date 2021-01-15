# \<yooda-comp>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i yooda-comp
```

## Usage

```html
<script type="module">
  import 'yooda-comp/yooda-comp.js';
</script>

<yooda-comp></yooda-comp>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
yarn lint
```

You can lint with ESLint and Prettier individually as well

```bash
yarn lint:eslint
```

```bash
yarn lint:prettier
```

To automatically fix many linting errors, run

```bash
uarm format
```

You can format using ESLint and Prettier individually as well

```bash
yarn format:eslint
```

```bash
yarn format:prettier
```

## Testing with Web Test Runner

To run the suite of Web Test Runner tests, run

```bash
yarn test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn storybook
```

To build a production version of Storybook, run

```bash
yarn storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
```

To run a local development server that serves the basic demo located in `demo/index.html`
