# @pigmilcom/a11y
About
Simple, lightweight accessibility widget that enhances usability and adds control features to any website instantly. Zero dependencies.
WCAG 2.1 Ready. Drop in one `<script>` tag **or** install via npm — visitors get instant control over text size, contrast, colour filters, motion, and more. Preferences persist via `localStorage`.

---

## CDN — Plug & Play

No React, no npm, no build step. Add one tag to your `<head>`.

### jsDelivr (recommended)

Served from the npm registry via jsDelivr's global edge network — always the latest published version:

```html
<script
  src="https://cdn.jsdelivr.net/npm/@pigmilcom/a11y/dist/a11y.cdn.js"
  data-position="bottom-right"
></script>
```

Pin to a specific version:

```html
<script
  src="https://cdn.jsdelivr.net/npm/@pigmilcom/a11y@1.0.1/dist/a11y.cdn.js"
  data-position="bottom-right"
></script>
```

### Self-hosted (pigmil CDN)

Use your own CDN endpoint for full control over deployment:

```html
<script
  src="https://cdn.pigmil.com/a11y/dist/a11y.cdn.js"
  data-position="bottom-right"
></script>
```

The widget auto-mounts on `DOMContentLoaded`. React 18 and all CSS are bundled inside — nothing else needed.

### `data-position` values

| Value           | Placement          |
| --------------- | ------------------ |
| `bottom-right`  | Bottom-right corner (default) |
| `bottom-left`   | Bottom-left corner |
| `top-right`     | Top-right corner   |
| `top-left`      | Top-left corner    |

### Programmatic control

The CDN build exposes `window.PigmilA11y` for manual control:

```js
PigmilA11y.mount();    // mount the widget
PigmilA11y.unmount();  // remove the widget and clean up
```

---

## npm Installation

```bash
npm install @pigmilcom/a11y
# yarn
yarn add @pigmilcom/a11y
# pnpm
pnpm add @pigmilcom/a11y
```

---

## Features

- Text size — Normal / Large / X-Large
- High contrast
- Invert colours
- Grayscale
- Reduce motion
- Highlight links
- Text spacing (WCAG 1.4.12)
- ADHD-friendly mode
- Dyslexia-friendly font
- Persists in `localStorage`
- Full keyboard & screen-reader support (`role="dialog"`, `aria-checked`, `aria-expanded`)
- Zero runtime dependencies (React peer dep only)

---

## Dist files

Every build outputs these files to `dist/`:

| File                | Format | Description                                   |
| ------------------- | ------ | --------------------------------------------- |
| `index.js`          | CJS    | npm (unminified, for bundlers)                 |
| `index.mjs`         | ESM    | npm (unminified, for bundlers)                 |
| `index.min.js`      | CJS    | npm (minified)                                 |
| `index.min.mjs`     | ESM    | npm (minified)                                 |
| `index.css`         | CSS    | Stylesheet import (`@pigmilcom/a11y/styles`)    |
| `index.min.css`     | CSS    | Minified stylesheet                            |
| `a11y.cdn.js`       | IIFE   | CDN bundle — React bundled, CSS inlined, minified |


---

## Quick start (React)

### 1 — Import the stylesheet (once, globally)

```js
import '@pigmilcom/a11y/styles';
```

This single import contains both the panel UI styles and all the accessibility
class rules applied to `<html>`.

### 2 — Drop in the widget

```jsx
import a11y from '@pigmilcom/a11y';

// Assign to a capitalized variable to use in JSX
const A11y = a11y;

<A11y className="fixed bottom-4 right-4 rounded" />
```

The `className` prop is merged onto the trigger button — use Tailwind classes,
custom classes, or anything your bundler supports to position the widget.

---

## Customising the widget with CSS

The widget exposes stable **`a11y-widget-*`** class names on its key elements
as a public API. Target them from a `<style>` tag (CDN / self-hosted) or your
own stylesheet (React):

```html
<style>
  /* Trigger button */
  .a11y-widget-btn {
    border-radius: 8px !important;
    background: rgba(15, 15, 40, 0.9) !important;
  }

  /* Dialog panel */
  .a11y-widget-dialog {
    border-color: rgba(99, 102, 241, 0.4) !important;
  }

  /* Toggle option rows */
  .a11y-widget-toggle-btn:hover {
    background: rgba(99, 102, 241, 0.06) !important;
  }
</style>
```

| Public class                | Element              |
| --------------------------- | -------------------- |
| `a11y-widget-btn`           | Trigger button       |
| `a11y-widget-dialog`        | Dialog panel         |
| `a11y-widget-toggle-btn`    | Each toggle option   |

> Place your `<style>` tag **after** the widget `<script>` tag so it takes
> precedence in the cascade. Use `!important` where the widget's base styles
> have higher specificity.

---

## Tailwind CSS support

Tailwind utility classes work transparently via the `className` prop:

```jsx
import a11y from '@pigmilcom/a11y';
const A11y = a11y;

// Tailwind classes are passed straight through to the trigger button
<A11y className="fixed bottom-6 right-6 rounded-full shadow-xl" />
```

Because the classes come from *your* source files, Tailwind's JIT scanner
picks them up automatically. No purge exceptions or safelist entries needed.

---

## Framework examples

### Next.js App Router

```jsx
// app/layout.jsx
import '@pigmilcom/a11y/styles';
import a11y from '@pigmilcom/a11y';

const A11y = a11y;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <A11y className="fixed bottom-4 right-4 rounded" />
            </body>
        </html>
    );
}
```

> The component is already marked `'use client'` — no extra wrapper needed.

### Vite + React

```jsx
// src/App.jsx
import a11y from '@pigmilcom/a11y';

const A11y = a11y;

export default function App() {
    return (
        <>
            {/* …your content… */}
            <A11y className="fixed bottom-4 right-4 rounded" />
        </>
    );
}
```

---

## Props

| Prop        | Type     | Default | Description                                 |
| ----------- | -------- | ------- | ------------------------------------------- |
| `className` | `string` | —       | Extra classes added to the trigger `<button>` |

---

## CSS classes applied to `<html>`

When a preference is enabled the widget adds a class to `document.documentElement`.
All rules live in `@pigmilcom/a11y/styles` and can be freely overridden in your own stylesheet.

| Class                   | Feature                                   |
| ----------------------- | ----------------------------------------- |
| `a11y-text-lg`          | Font size +18 %                           |
| `a11y-text-xl`          | Font size +45 %                           |
| `a11y-high-contrast`    | Contrast filter (1.6×)                    |
| `a11y-invert`           | Invert colours (re-inverts images/video)  |
| `a11y-grayscale`        | Grayscale filter                          |
| `a11y-reduce-motion`    | Strips all animations & transitions       |
| `a11y-highlight-links`  | Outlines every link and `[role="link"]`   |
| `a11y-text-spacing`     | Letter / word / line spacing (WCAG 1.4.12)|
| `a11y-adhd`             | Removes motion + adds strong focus ring   |
| `a11y-dyslexia`         | Switches to a high-readability system font|

---

## Storage

Preferences are saved under the `localStorage` key `pgm-a11y` as a JSON
object. The widget reads and re-applies them on first client render, so
preferences survive page reloads and navigation. On SSR the widget hydrates
without errors — all DOM access is guarded by a `mounted` flag.

---

## Requirements

### CDN

No dependencies. Works in any HTML page.

### npm package

| Peer dependency | Version |
| --------------- | ------- |
| `react`         | ≥ 17    |
| `react-dom`     | ≥ 17    |

---

## License

MIT © [pigmilcom](https://pigmilcom.com)

### Free Usage

The free version is available for any domain and includes:

- Up to **1,000 requests / day** per domain
- Up to **30,000 requests / month** per domain

### Full version (white-label)

The full version removes all limits and PIGMIL branding and can be fully white-labeled for your product.

For inquiries contact PIGMIL:

- **Email:** [webmaster@pigmil.com](mailto:webmaster@pigmil.com)
- **Web:** [pigmil.com](https://pigmilcom.com)

