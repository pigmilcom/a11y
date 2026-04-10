#!/usr/bin/env node
/**
 * scripts/build-gh.js
 *
 * Updates the gh-pages branch with the latest demo/index.html from main.
 *
 * Steps:
 *   1. Verify working tree is clean (no uncommitted changes)
 *   2. Read demo/index.html from the current branch
 *   3. Ensure gh-pages branch exists (local → remote → create orphan)
 *   4. Switch to gh-pages
 *   5. Write index.html, stage, commit (skip if nothing changed)
 *   6. Push origin gh-pages
 *   7. Return to original branch
 *
 * Usage:
 *   node scripts/build-gh.js
 *   npm run build:gh
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function run(cmd, opts = {}) {
    const out = execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: 'pipe', ...opts });
    return out ? out.trim() : '';
}

function log(msg) {
    process.stdout.write(`[build-gh] ${msg}\n`);
}

function tryRun(cmd, opts = {}) {
    try { return run(cmd, opts); } catch { return null; }
}

// ── 1. Guard: must have a clean working tree ─────────────────────────────────
const dirty = run('git status --porcelain');
if (dirty) {
    process.stderr.write(
        '[build-gh] Working tree has uncommitted changes. Commit or stash them first.\n'
    );
    process.exit(1);
}

const originalBranch = run('git rev-parse --abbrev-ref HEAD');
log(`Current branch: ${originalBranch}`);

// ── 2. Read source file ───────────────────────────────────────────────────────
const srcPath = resolve(ROOT, 'demo', 'index.html');
const html = readFileSync(srcPath, 'utf8');

// ── 3. Read version from package.json ────────────────────────────────────────
const { version } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));

// ── 4. Ensure gh-pages branch exists and switch to it ──────────────────────
const localBranch  = tryRun('git show-ref --verify refs/heads/gh-pages');
const remoteBranch = tryRun('git ls-remote --heads origin gh-pages');

if (localBranch) {
    log('Switching to existing local gh-pages…');
    run('git checkout gh-pages');
} else if (remoteBranch) {
    log('Creating local gh-pages tracking origin/gh-pages…');
    run('git checkout -b gh-pages origin/gh-pages');
} else {
    log('gh-pages not found — creating orphan branch…');
    run('git checkout --orphan gh-pages');
    tryRun('git rm -rf .');
}

try {
    // ── 5. Write index.html ───────────────────────────────────────────────────
    const destPath = resolve(ROOT, 'index.html');
    writeFileSync(destPath, html, 'utf8');

    // ── 6. Stage & detect diff ────────────────────────────────────────────────
    run('git add index.html');
    const staged = run('git diff --cached --name-only');

    if (!staged) {
        log('index.html is already up-to-date. Nothing to commit.');
    } else {
        run(`git commit -m "gh-pages: v${version}"`);
        log(`Committed: gh-pages v${version}`);

        // ── 7. Push ───────────────────────────────────────────────────────────
        run('git push origin gh-pages', { stdio: 'inherit' });
        log('Pushed origin gh-pages ✓');
    }
} finally {
    // ── 8. Always return to original branch ──────────────────────────────────
    run(`git checkout ${originalBranch}`);
    log(`Back on ${originalBranch}`);
}
