## Simple Dynamic import example

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Importing Third Party Library 'markdown-to-html-converter'

Just importing this library and trying to use it results in a error:

"error - SyntaxError: Cannot use import statement outside a module"

To get around this you can use dynamic imports and set ssr to false.

https://nextjs.org/docs/advanced-features/dynamic-import


