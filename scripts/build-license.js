#!/usr/bin/env node
'use strict';
// scripts/build-license.js
//
// Builds src/license.js → dist/license.min.js — a standalone, obfuscated UMD
// bundle that sets window.PigmilLicense.validateLicense on load.
//
// Loaded at runtime by src/cdn.jsx via a <script> injection from:
//   https://cdn.pigmil.com/a11y/dist/license.min.js
// Also shipped inside dist/ with the npm package for self-hosted setups.
//
// This script exits 0 (success) when src/license.js is absent so `npm run build`
// does not break in public CI environments that do not have the private source.
//
// Protections applied:
//   * string-array + base64 encoding  — hides API URL, storage keys, XOR data
//   * controlFlowFlattening           — obscures quota / branching logic
//   * dead-code injection             — adds fake branches to confuse analysis
//   * splitStrings                    — breaks string literals into chunks
//
// Real enforcement is server-side via the PIGMIL API.

const fs   = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const SRC  = path.join(__dirname, '../src/license.js');
const DEST = path.join(__dirname, '../dist/license.min.js');

// ── Graceful skip when src/license.js is absent (public repo / CI) ───────────
if (!fs.existsSync(SRC)) {
    console.log('[build-license] src/license.js not found — skipping. (expected in public CI)');
    process.exit(0);
}

const source = fs.readFileSync(SRC, 'utf8');
const before = Buffer.byteLength(source, 'utf8');

// ── 1. Strip ESM export keyword → plain async function declaration ────────────
// src/license.js has exactly one export: `export async function validateLicense(`
const plain = source.replace(/^export\s+(async\s+function\s+validateLicense\b)/m, '$1');

// ── 2. Append UMD global assignment ──────────────────────────────────────────
// Sets window.PigmilLicense.validateLicense so widget.jsx can call it at runtime
// without a static import. works in browser (window) and web workers (self).
const umd = plain + '\n;(function(g){g.PigmilLicense=Object.freeze({validateLicense:validateLicense});})(typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);';

// ── 3. Obfuscate ──────────────────────────────────────────────────────────────
const result = JavaScriptObfuscator.obfuscate(umd, {
    compact:  true,
    simplify: true,
    stringArray:                         true,
    stringArrayEncoding:                 ['base64'],
    stringArrayThreshold:                0.9,
    stringArrayCallsTransform:           true,
    stringArrayCallsTransformThreshold:  0.7,
    stringArrayRotate:                   true,
    stringArrayShuffle:                  true,
    splitStrings:                        true,
    splitStringsChunkLength:             5,
    controlFlowFlattening:               true,
    controlFlowFlatteningThreshold:      0.4,
    deadCodeInjection:                   true,
    deadCodeInjectionThreshold:          0.2,
    selfDefending:                       false,  // ESM strict-mode incompatibility
    identifierNamesGenerator:            'hexadecimal',
    renameGlobals:                       false,
    sourceMap:                           false,
});

// ── 4. Write output ───────────────────────────────────────────────────────────
const out = result.getObfuscatedCode();
const after = Buffer.byteLength(out, 'utf8');

fs.mkdirSync(path.dirname(DEST), { recursive: true });
fs.writeFileSync(DEST, out, 'utf8');

console.log(
    '[build-license] license.js ' +
    (before / 1024).toFixed(1) + ' KB → ' +
    (after  / 1024).toFixed(1) + ' KB → dist/license.min.js'
);
