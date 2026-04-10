import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.js'],
    format: ['cjs', 'esm'],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    clean: true,
    // Inject 'use client' so Next.js App Router treats this as a client boundary
    banner: {
        js: "'use client';",
    },
    esbuildOptions(options) {
        options.jsx = 'automatic';
    },
});
