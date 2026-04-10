import { defineConfig } from 'tsup';

// Produces minified npm-package builds alongside the regular ones:
//   dist/index.min.js   (CJS, minified)
//   dist/index.min.mjs  (ESM, minified)
export default defineConfig({
    entry: ['src/index.js'],
    format: ['cjs', 'esm'],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    clean: false, // don't wipe dist — regular builds already ran before this
    minify: true,
    outExtension({ format }) {
        return { js: format === 'esm' ? '.min.mjs' : '.min.js' };
    },
    esbuildOptions(options) {
        options.jsx = 'automatic';
    },
});
