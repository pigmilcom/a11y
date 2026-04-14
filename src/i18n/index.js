import ar from './ar.js';
import de from './de.js';
import en from './en.js';
import es from './es.js';
import fr from './fr.js';
import hi from './hi.js';
import pt from './pt.js';
import zh from './zh.js';

const MESSAGE_KEYS = [
    'aria.triggerLabel',
    'aria.dialogLabel',
    'aria.closeLabel',
    'header.title',
    'header.subtitle',
    'textSize.label',
    'textSize.options.0',
    'textSize.options.1',
    'textSize.options.2',
    'toggles.highContrast.label',
    'toggles.highContrast.desc',
    'toggles.invertColors.label',
    'toggles.invertColors.desc',
    'toggles.grayscale.label',
    'toggles.grayscale.desc',
    'toggles.reduceMotion.label',
    'toggles.reduceMotion.desc',
    'toggles.highlightLinks.label',
    'toggles.highlightLinks.desc',
    'toggles.textSpacing.label',
    'toggles.textSpacing.desc',
    'toggles.dyslexia.label',
    'toggles.dyslexia.desc',
    'footer.about',
    'footer.reset',
    'footer.github',
    'notice.body',
];

const RAW_TRANSLATIONS = {
    ar,
    de,
    en,
    es,
    fr,
    hi,
    pt,
    zh,
};

const RTL_LANGUAGES = new Set(['ar']);

function isIndexSegment(value) {
    return /^\d+$/.test(value);
}

function setMessage(target, path, value) {
    const segments = path.split('.');
    let current = target;

    for (let index = 0; index < segments.length; index += 1) {
        const segment = segments[index];
        const lastSegment = index === segments.length - 1;
        const nextSegment = segments[index + 1];
        const numericSegment = isIndexSegment(segment);
        const key = numericSegment ? Number(segment) : segment;

        if (lastSegment) {
            current[key] = value;
            return;
        }

        if (current[key] == null) {
            current[key] = isIndexSegment(nextSegment) ? [] : {};
        }

        current = current[key];
    }
}

function buildMessages(messages) {
    const resolved = MESSAGE_KEYS.map((_, index) => messages[index] ?? en[index]);
    const result = {};
    MESSAGE_KEYS.forEach((key, index) => {
        setMessage(result, key, resolved[index]);
    });
    return result;
}

const TRANSLATIONS = Object.freeze(
    Object.fromEntries(
        Object.entries(RAW_TRANSLATIONS).map(([code, messages]) => [code, buildMessages(messages)])
    )
);

export const SUPPORTED_LANGUAGES = Object.freeze(Object.keys(TRANSLATIONS));

export function normalizeLanguage(value) {
    if (typeof value !== 'string') return 'en';

    const normalized = value.trim().toLowerCase();
    if (!normalized) return 'en';
    if (TRANSLATIONS[normalized]) return normalized;

    const baseLanguage = normalized.split('-')[0];
    return TRANSLATIONS[baseLanguage] ? baseLanguage : 'en';
}

export function getMessages(value) {
    return TRANSLATIONS[normalizeLanguage(value)];
}

export function isRtlLanguage(value) {
    return RTL_LANGUAGES.has(normalizeLanguage(value));
}