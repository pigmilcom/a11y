/* ────────────────────────────────────────

a11y.jsx - WCAG 2.1 Compliance Widget

Make Your Site Accessible for Everyone:
This React component provides a user-friendly interface for adjusting accessibility preferences on your website, ensuring compliance with WCAG 2.1 guidelines. 
It allows users to customize their experience by modifying text size, contrast, color schemes, and more, with changes that apply instantly and persist across sessions.

──────────────────────────────────────── */


'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getMessages, isRtlLanguage, normalizeLanguage } from './i18n/index.js';

// ── Storage key ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'pgm-a11y';
const LANGUAGE_STORAGE_KEY = 'a11y-lang';
const LANGUAGE_CHANGE_EVENT = 'pgm-a11y-language-change';

function normalizeTheme(value) {
    if (value === 'light' || value === 'dark') return value;
    return null;
}

function detectDocumentTheme() {
    const root = document.documentElement;
    const inlineColorScheme = root.style.colorScheme?.trim().toLowerCase();
    const computedColorScheme = window.getComputedStyle(root).colorScheme?.trim().toLowerCase();

    if (root.classList.contains('dark') || inlineColorScheme === 'dark' || computedColorScheme === 'dark') {
        return 'dark';
    }

    return 'light';
}

// ── Default preferences ──────────────────────────────────────────────────────
const DEFAULTS = {
    textSize: 0,       // 0=normal | 1=large | 2=x-large
    highContrast: false,
    invertColors: false,
    grayscale: false,
    reduceMotion: false,
    highlightLinks: false,
    textSpacing: false,
    dyslexia: false,
};

// ── Apply preferences to <html> ──────────────────────────────────────────────
function applyPrefs(prefs) {
    const root = document.documentElement;

    // --- Text size ---
    root.classList.remove('a11y-text-lg', 'a11y-text-xl');
    if (prefs.textSize === 1) root.classList.add('a11y-text-lg');
    if (prefs.textSize === 2) root.classList.add('a11y-text-xl');

    // --- Boolean classes ---
    const map = {
        'a11y-high-contrast':  prefs.highContrast,
        'a11y-invert':         prefs.invertColors,
        'a11y-grayscale':      prefs.grayscale,
        'a11y-reduce-motion':  prefs.reduceMotion,
        'a11y-highlight-links':prefs.highlightLinks,
        'a11y-text-spacing':   prefs.textSpacing,
        'a11y-dyslexia':       prefs.dyslexia,
    };
    for (const [cls, on] of Object.entries(map)) {
        root.classList.toggle(cls, on);
    }

    // --- Computed CSS filter on <html> (stacks multiple filters correctly) ---
    const filters = [];
    if (prefs.invertColors)  filters.push('invert(1) hue-rotate(180deg)');
    if (prefs.highContrast)  filters.push('contrast(1.6)');
    if (prefs.grayscale)     filters.push('grayscale(1)');
    root.style.filter = filters.join(' ');
}

// ── Persistence helpers ──────────────────────────────────────────────────────
function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
    } catch {
        return { ...DEFAULTS };
    }
}
function save(prefs) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch {}
}

function hasExplicitLanguage(value) {
    return typeof value === 'string' ? value.trim() !== '' : value != null;
}

function readStoredLanguage() {
    try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        return stored ? normalizeLanguage(stored) : null;
    } catch {
        return null;
    }
}

function writeStoredLanguage(value) {
    const nextLanguage = normalizeLanguage(value);

    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {}

    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, {
            detail: { lang: nextLanguage },
        }));
    }

    return nextLanguage;
}

function renderBrandNotice(template, brandNode) {
    const [before, after = ''] = template.split('{brand}');
    return (
        <>
            {before}
            {brandNode}
            {after}
        </>
    );
}

// ── Option rows config ────────────────────────────────────────────────────────
const TOGGLES = [
    {
        key: 'highContrast',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20" />
                <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        key: 'invertColors',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M12 3v18M3 12h18" />
                <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        key: 'grayscale',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        key: 'reduceMotion',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l-7 7 7 7" />
            </svg>
        ),
    },
    {
        key: 'highlightLinks',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
    },
    {
        key: 'textSpacing',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
    },
    {
        key: 'dyslexia',
        icon: (
            <svg viewBox="0 0 24 24" className="pgm-icon" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M4 7V4h16v3" />
                <path d="M9 20h6" />
                <path d="M12 4v16" />
            </svg>
        ),
    },
];

// ── Widget ────────────────────────────────────────────────────────────────────
// theme: null | 'auto' | 'light' | 'dark'
// null / 'auto' infer from the page's <html> theme, otherwise default to light.
export default function A11y({ className, theme = null, lang = null }) {
    const [open, setOpen]           = useState(false);
    const [prefs, setPrefs]         = useState(DEFAULTS);
    const [mounted, setMounted]     = useState(false);
    const [notice, setNotice]       = useState(false);
    const [license, setLicense]     = useState({ status: 'checking', plan: 'free' });
    const [pageTheme, setPageTheme] = useState('light');
    const [resolvedTheme, setResolvedTheme] = useState('light');
    const [resolvedLanguage, setResolvedLanguage] = useState('en');
    const triggerRef                = useRef(null);
    const wasOpenRef                = useRef(false);
    const explicitTheme             = normalizeTheme(theme);
    const messages                  = getMessages(resolvedLanguage);
    const direction                 = isRtlLanguage(resolvedLanguage) ? 'rtl' : 'ltr';
    const triggerTheme              = className ? null : (explicitTheme ?? pageTheme);
    const textSizeLabels            = messages.textSize.options;
    const closeDialog               = () => setOpen(false);
    const usesExplicitLanguage      = hasExplicitLanguage(lang);

    // Mark mounted so portal renders only client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Track the page theme from <html> so the trigger button can remain independent
    // from the dialog's manual theme override.
    useEffect(() => {
        if (explicitTheme) {
            setPageTheme(explicitTheme);
            return;
        }

        const applyDetectedTheme = () => setPageTheme(detectDocumentTheme());
        applyDetectedTheme();

        const observer = new MutationObserver(applyDetectedTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'style'],
        });

        return () => observer.disconnect();
    }, [explicitTheme]);

    // Resolve dialog theme from explicit prop or page theme.
    useEffect(() => {
        setResolvedTheme(explicitTheme ?? pageTheme);
    }, [explicitTheme, pageTheme]);

    // Validate domain license — reads window.PigmilLicense loaded by cdn.jsx
    // (or host page). Fails-open for npm usage without a CDN pre-load so the
    // widget still renders; real enforcement is always server-side.
    useEffect(() => {
        const fn = typeof window !== 'undefined'
            ? window?.PigmilLicense?.validateLicense
            : null;
        if (typeof fn === 'function') {
            fn().then(setLicense).catch(() => setLicense({ status: 'valid', plan: 'free' }));
        } else {
            setLicense({ status: 'valid', plan: 'free' });
        }
    }, []);

    // Hydrate from localStorage on mount and apply saved prefs
    useEffect(() => {
        const saved = load();
        setPrefs(saved);
        applyPrefs(saved);
    }, []);

    useEffect(() => {
        if (usesExplicitLanguage) {
            setResolvedLanguage(writeStoredLanguage(lang));
            return;
        }

        const storedLanguage = readStoredLanguage();
        setResolvedLanguage(storedLanguage ?? writeStoredLanguage('en'));
    }, [lang, usesExplicitLanguage]);

    useEffect(() => {
        if (usesExplicitLanguage) return;

        const syncStoredLanguage = () => {
            const storedLanguage = readStoredLanguage();
            setResolvedLanguage(storedLanguage ?? writeStoredLanguage('en'));
        };

        const onStorage = (event) => {
            if (event.key && event.key !== LANGUAGE_STORAGE_KEY) return;
            syncStoredLanguage();
        };

        window.addEventListener('storage', onStorage);
        window.addEventListener(LANGUAGE_CHANGE_EVENT, syncStoredLanguage);

        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener(LANGUAGE_CHANGE_EVENT, syncStoredLanguage);
        };
    }, [usesExplicitLanguage]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') closeDialog(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    useEffect(() => {
        if (wasOpenRef.current && !open) {
            triggerRef.current?.focus();
        }

        wasOpenRef.current = open;
    }, [open]);

    // Block rendering: silent while validating, and on quota/unreachable errors
    if (license.status === 'checking' || license.status === 'error' || license.status === 'blocked') {
        return null;
    }

    // Pro plan: hide PIGMIL branding in footer
    const isPro = license.plan === 'pro';

    // Commit a preference update
    const update = (patch) => {
        setPrefs((prev) => {
            const next = { ...prev, ...patch };
            applyPrefs(next);
            save(next);
            return next;
        });
    };

    const reset = () => {
        setPrefs(DEFAULTS);
        applyPrefs(DEFAULTS);
        save(DEFAULTS);
    };

    const isModified = JSON.stringify(prefs) !== JSON.stringify(DEFAULTS);

    return (
        <>
            {/* ── Trigger button — stays wherever it's placed in the page ── */}
            <button
                ref={triggerRef}
                type="button"
                aria-label={messages.aria.triggerLabel}
                aria-expanded={open}
                aria-haspopup="dialog"
                onClick={() => setOpen((v) => !v)}
                className={`pgm-btn a11y-widget-btn${className ? ` ${className}` : ''}`}
                data-pgm-theme={triggerTheme}
                lang={resolvedLanguage}
            >
                <svg viewBox="0 0 24 24" className="pgm-icon-lg" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
                    <path d="M5 8.5h14M8 8.5l1 10 3-4 3 4 1-10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isModified && (
                    <span className="pgm-dot" aria-hidden="true" />
                )}
            </button>

            {/* ── Portal: renders into document.body to escape any stacking context ── */}
            {open && mounted && createPortal(
                <>
                    {/* Backdrop — click closes the dialog */}
                    <div
                        className="pgm-backdrop"
                        onClick={closeDialog}
                        aria-hidden="true"
                        data-pgm-theme={resolvedTheme}
                    />

                    {/* Dialog — centered in viewport */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={messages.aria.dialogLabel}
                        className="pgm-dialog a11y-widget-dialog"
                        data-pgm-theme={resolvedTheme}
                        dir={direction}
                        lang={resolvedLanguage}
                    >
                        {/* Header */}
                        <div className="pgm-header">
                            <div>
                                <p className="pgm-header-title">
                                    {messages.header.title}
                                </p>
                                <p className="pgm-header-subtitle">
                                    {messages.header.subtitle}
                                </p>
                            </div>
                            <button
                                type="button"
                                aria-label={messages.aria.closeLabel}
                                onClick={closeDialog}
                                className="pgm-close-btn"
                            >
                                <svg viewBox="0 0 24 24" className="pgm-icon-sm" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Text size stepper */}
                        <div className="pgm-size-section">
                            <div className="pgm-size-header">
                                <span className="pgm-size-label">
                                    {messages.textSize.label}
                                </span>
                                <span className="pgm-size-value">
                                    {textSizeLabels[prefs.textSize]}
                                </span>
                            </div>
                            <div className="pgm-size-btns">
                                {textSizeLabels.map((lbl, i) => (
                                    <button
                                        key={lbl}
                                        type="button"
                                        aria-pressed={prefs.textSize === i}
                                        onClick={() => update({ textSize: i })}
                                        className={`pgm-size-btn ${prefs.textSize === i ? 'pgm-size-btn--active' : 'pgm-size-btn--inactive'}`}
                                    >
                                        {lbl}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Toggle options */}
                        <div className="pgm-toggle-list">
                            {TOGGLES.map(({ key, icon }) => {
                                const on = prefs[key];
                                const toggleCopy = messages.toggles[key];
                                return (
                                    <button
                                        key={key}
                                        type="button"
                                        role="switch"
                                        aria-checked={on}
                                        onClick={() => update({ [key]: !on })}
                                        className={`pgm-toggle-btn a11y-widget-toggle-btn${on ? ' pgm-toggle-btn--on' : ''}`}
                                    >
                                        <span className={`pgm-toggle-icon${on ? ' pgm-toggle-icon--on' : ''}`}>
                                            {icon}
                                        </span>
                                        <span className="pgm-toggle-text">
                                            <span className={`pgm-toggle-label${on ? ' pgm-toggle-label--on' : ''}`}>
                                                {toggleCopy.label}
                                            </span>
                                            <span className="pgm-toggle-desc">
                                                {toggleCopy.desc}
                                            </span>
                                        </span>
                                        {/* Pill toggle */}
                                        <span
                                            aria-hidden="true"
                                            className={`pgm-pill${on ? ' pgm-pill--on' : ' pgm-pill--off'}`}
                                        >
                                            <span
                                                className={`pgm-pill-knob${on ? ' pgm-pill-knob--on' : ' pgm-pill-knob--off'}`}
                                            />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer — reset + notice toggle (notice hidden on pro plan) */}
                        <div className="pgm-footer">
                            {!isPro && (
                                <button
                                    type="button"
                                    aria-expanded={notice}
                                    aria-controls="pgm-notice"
                                    onClick={() => setNotice((v) => !v)}
                                    className="pgm-notice-btn"
                                >
                                    <img
                                        src="https://cdn.pigmil.com/shared/icon.png"
                                        alt="Pigmil"
                                        className="pgm-notice-logo"
                                    />
                                        <span>{messages.footer.about}</span>
                                    <svg viewBox="0 0 24 24" className="pgm-notice-chevron" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ transform: notice ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={reset}
                                disabled={!isModified}
                                className="pgm-reset-btn"
                            >
                                {messages.footer.reset}
                            </button>
                        </div>

                        {/* Notice — collapsible, free plan only */}
                        {!isPro && notice && (
                            <div id="pgm-notice" className="pgm-notice">
                                <p className="pgm-notice-text">
                                    {renderBrandNotice(
                                        messages.notice.body,
                                        <a
                                            href="https://github.com/pigmilcom/a11y"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pgm-notice-link"
                                        >
                                            PIGMIL
                                        </a>
                                    )}
                                </p>
                                <a
                                    href="https://github.com/pigmilcom/a11y"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pgm-notice-gh"
                                >
                                    <svg viewBox="0 0 24 24" className="pgm-icon-sm" fill="currentColor" aria-hidden="true">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    {messages.footer.github}
                                </a>
                            </div>
                        )}
                    </div>
                </>,
                document.body
            )}
        </>
    );
}
