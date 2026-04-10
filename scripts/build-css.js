#!/usr/bin/env node
// scripts/build-css.js — copies src/a11y.css → dist/index.css and dist/index.min.css
const fs   = require('fs');
const path = require('path');

const src  = path.join(__dirname, '../src/a11y.css');
const dist = path.join(__dirname, '../dist');

fs.mkdirSync(dist, { recursive: true });

const css = fs.readFileSync(src, 'utf8');
fs.writeFileSync(path.join(dist, 'index.css'), css);

const minified = css
    .replace(/\/\*[\s\S]*?\*\//g, '')   // strip comments
    .replace(/\s+/g, ' ')               // collapse whitespace
    .replace(/ ?([{}:;,]) ?/g, '$1')    // remove spaces around punctuation
    .replace(/;}/g, '}')               // remove trailing semicolons
    .trim();
fs.writeFileSync(path.join(dist, 'index.min.css'), minified);

// Generate src/a11y-css.js — a real JS module that exports the CSS as a string.
// cdn.jsx imports this file so esbuild (not tsup's CSS extractor) bundles it inline.
const cssJsPath = path.join(__dirname, '../src/a11y-css.js');
const cssJsContent = `// Auto-generated from src/a11y.css — do not edit directly.\n// Re-run: npm run build:css\nexport default ${JSON.stringify(css)};\n`;
fs.writeFileSync(cssJsPath, cssJsContent);

console.log('CSS built → dist/index.css  dist/index.min.css  src/a11y-css.js');
