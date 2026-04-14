'use client';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  A11yWidget: () => A11y,
  a11y: () => A11y,
  default: () => A11y
});
module.exports = __toCommonJS(index_exports);

// src/widget.jsx
var import_react = require("react");
var import_react_dom = require("react-dom");
var import_jsx_runtime = require("react/jsx-runtime");
var STORAGE_KEY = "pgm-a11y";
var THEME_STORAGE_KEY = "pgm-a11y-theme";
function normalizeTheme(value) {
  if (value === "light" || value === "dark") return value;
  return null;
}
function detectDocumentTheme() {
  var _a, _b;
  const root = document.documentElement;
  const inlineColorScheme = (_a = root.style.colorScheme) == null ? void 0 : _a.trim().toLowerCase();
  const computedColorScheme = (_b = window.getComputedStyle(root).colorScheme) == null ? void 0 : _b.trim().toLowerCase();
  if (root.classList.contains("dark") || inlineColorScheme === "dark" || computedColorScheme === "dark") {
    return "dark";
  }
  return "light";
}
var DEFAULTS = {
  textSize: 0,
  // 0=normal | 1=large | 2=x-large
  highContrast: false,
  invertColors: false,
  grayscale: false,
  reduceMotion: false,
  highlightLinks: false,
  textSpacing: false,
  dyslexia: false
};
function applyPrefs(prefs) {
  const root = document.documentElement;
  root.classList.remove("a11y-text-lg", "a11y-text-xl");
  if (prefs.textSize === 1) root.classList.add("a11y-text-lg");
  if (prefs.textSize === 2) root.classList.add("a11y-text-xl");
  const map = {
    "a11y-high-contrast": prefs.highContrast,
    "a11y-invert": prefs.invertColors,
    "a11y-grayscale": prefs.grayscale,
    "a11y-reduce-motion": prefs.reduceMotion,
    "a11y-highlight-links": prefs.highlightLinks,
    "a11y-text-spacing": prefs.textSpacing,
    "a11y-dyslexia": prefs.dyslexia
  };
  for (const [cls, on] of Object.entries(map)) {
    root.classList.toggle(cls, on);
  }
  const filters = [];
  if (prefs.invertColors) filters.push("invert(1) hue-rotate(180deg)");
  if (prefs.highContrast) filters.push("contrast(1.6)");
  if (prefs.grayscale) filters.push("grayscale(1)");
  root.style.filter = filters.join(" ");
}
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}
function save(prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
  }
}
function loadThemeOverride() {
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return null;
  }
}
function saveThemeOverride(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
  }
}
var TEXT_LABELS = ["Normal", "Large", "X-Large"];
var TOGGLES = [
  {
    key: "highContrast",
    label: "High Contrast",
    desc: "Increase colour contrast for readability",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v20" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a10 10 0 0 1 0 20", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "invertColors",
    label: "Invert Colors",
    desc: "Invert all page colours",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18M3 12h18" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3a9 9 0 0 1 0 18", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "grayscale",
    label: "Grayscale",
    desc: "Remove all colour from the page",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "reduceMotion",
    label: "Reduce Motion",
    desc: "Stop animations and transitions",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l-7 7 7 7" }) })
  },
  {
    key: "highlightLinks",
    label: "Highlight Links",
    desc: "Make all links visible at a glance",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ] })
  },
  {
    key: "textSpacing",
    label: "Text Spacing",
    desc: "Increase letter, word & line spacing",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) })
  },
  {
    key: "dyslexia",
    label: "Dyslexia Font",
    desc: "Switch to a high-readability typeface",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7V4h16v3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 20h6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v16" })
    ] })
  }
];
function A11y({ className, theme = null }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [prefs, setPrefs] = (0, import_react.useState)(DEFAULTS);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const [notice, setNotice] = (0, import_react.useState)(false);
  const [license, setLicense] = (0, import_react.useState)({ status: "checking", plan: "free" });
  const [pageTheme, setPageTheme] = (0, import_react.useState)("light");
  const [themeOverride, setThemeOverride] = (0, import_react.useState)(null);
  const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)("light");
  const triggerRef = (0, import_react.useRef)(null);
  const explicitTheme = normalizeTheme(theme);
  const triggerTheme = className ? null : explicitTheme ?? pageTheme;
  const isDarkTheme = resolvedTheme === "dark";
  (0, import_react.useEffect)(() => {
    setMounted(true);
    const storedTheme = loadThemeOverride();
    if (storedTheme) {
      setThemeOverride(storedTheme);
      setResolvedTheme(storedTheme);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (explicitTheme) {
      setPageTheme(explicitTheme);
      return;
    }
    const applyDetectedTheme = () => setPageTheme(detectDocumentTheme());
    applyDetectedTheme();
    const observer = new MutationObserver(applyDetectedTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"]
    });
    return () => observer.disconnect();
  }, [explicitTheme]);
  (0, import_react.useEffect)(() => {
    if (themeOverride) {
      setResolvedTheme(themeOverride);
      return;
    }
    setResolvedTheme(explicitTheme ?? pageTheme);
  }, [explicitTheme, pageTheme, themeOverride]);
  (0, import_react.useEffect)(() => {
    var _a;
    const fn = typeof window !== "undefined" ? (_a = window == null ? void 0 : window.PigmilLicense) == null ? void 0 : _a.validateLicense : null;
    if (typeof fn === "function") {
      fn().then(setLicense).catch(() => setLicense({ status: "valid", plan: "free" }));
    } else {
      setLicense({ status: "valid", plan: "free" });
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const saved = load();
    setPrefs(saved);
    applyPrefs(saved);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (license.status === "checking" || license.status === "error" || license.status === "blocked") {
    return null;
  }
  const isPro = license.plan === "pro";
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
  const toggleWidgetTheme = () => {
    const nextTheme = isDarkTheme ? "light" : "dark";
    setThemeOverride(nextTheme);
    setResolvedTheme(nextTheme);
    saveThemeOverride(nextTheme);
  };
  const isModified = JSON.stringify(prefs) !== JSON.stringify(DEFAULTS);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref: triggerRef,
        type: "button",
        "aria-label": "Accessibility options",
        "aria-expanded": open,
        "aria-haspopup": "dialog",
        onClick: () => setOpen((v) => !v),
        className: `pgm-btn a11y-widget-btn${className ? ` ${className}` : ""}`,
        "data-pgm-theme": triggerTheme,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-lg", fill: "none", stroke: "currentColor", strokeWidth: 1.8, "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "5", r: "1.5", fill: "currentColor", stroke: "none" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 8.5h14M8 8.5l1 10 3-4 3 4 1-10", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }),
          isModified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-dot", "aria-hidden": "true" })
        ]
      }
    ),
    open && mounted && (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: "pgm-backdrop",
            onClick: () => setOpen(false),
            "aria-hidden": "true",
            "data-pgm-theme": resolvedTheme
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Accessibility settings",
            className: "pgm-dialog a11y-widget-dialog",
            "data-pgm-theme": resolvedTheme,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-header", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pgm-header-title", children: "Accessibility" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pgm-header-subtitle", children: "WCAG 2.1 \xB7 Personalise your experience" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-header-actions", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": isDarkTheme,
                      "aria-label": `Use ${isDarkTheme ? "light" : "dark"} widget theme`,
                      onClick: toggleWidgetTheme,
                      className: `pgm-theme-switch${isDarkTheme ? " pgm-theme-switch--dark" : ""}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-theme-switch-track", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-theme-switch-knob", children: isDarkTheme ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-xs", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 15.5A7.5 7.5 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-xs", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77", strokeLinecap: "round" })
                      ] }) }) })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Close accessibility panel",
                      onClick: () => setOpen(false),
                      className: "pgm-close-btn",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-sm", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12", strokeLinecap: "round" }) })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-size-section", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-size-header", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-size-label", children: "Text Size" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-size-value", children: TEXT_LABELS[prefs.textSize] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pgm-size-btns", children: TEXT_LABELS.map((lbl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": prefs.textSize === i,
                    onClick: () => update({ textSize: i }),
                    className: `pgm-size-btn ${prefs.textSize === i ? "pgm-size-btn--active" : "pgm-size-btn--inactive"}`,
                    children: lbl
                  },
                  lbl
                )) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pgm-toggle-list", children: TOGGLES.map(({ key, label, desc, icon }) => {
                const on = prefs[key];
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "switch",
                    "aria-checked": on,
                    onClick: () => update({ [key]: !on }),
                    className: `pgm-toggle-btn a11y-widget-toggle-btn${on ? " pgm-toggle-btn--on" : ""}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pgm-toggle-icon${on ? " pgm-toggle-icon--on" : ""}`, children: icon }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "pgm-toggle-text", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pgm-toggle-label${on ? " pgm-toggle-label--on" : ""}`, children: label }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-toggle-desc", children: desc })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: `pgm-pill${on ? " pgm-pill--on" : " pgm-pill--off"}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "span",
                            {
                              className: `pgm-pill-knob${on ? " pgm-pill-knob--on" : " pgm-pill-knob--off"}`
                            }
                          )
                        }
                      )
                    ]
                  },
                  key
                );
              }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-footer", children: [
                !isPro && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    "aria-expanded": notice,
                    "aria-controls": "pgm-notice",
                    onClick: () => setNotice((v) => !v),
                    className: "pgm-notice-btn",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "img",
                        {
                          src: "https://cdn.pigmil.com/shared/icon.png",
                          alt: "Pigmil",
                          className: "pgm-notice-logo"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About this widget" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-notice-chevron", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", style: { transform: notice ? "rotate(180deg)" : "rotate(0deg)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: reset,
                    disabled: !isModified,
                    className: "pgm-reset-btn",
                    children: "Reset all"
                  }
                )
              ] }),
              !isPro && notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { id: "pgm-notice", className: "pgm-notice", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "pgm-notice-text", children: [
                  "This accessibility widget is provided free of charge by",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "a",
                    {
                      href: "https://github.com/pigmilcom/a11y",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "pgm-notice-link",
                      children: "PIGMIL"
                    }
                  ),
                  " ",
                  "as an open-source tool to help make the web more accessible. It stores your preferences locally in your browser and sends no data to any server."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "a",
                  {
                    href: "https://github.com/pigmilcom/a11y",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pgm-notice-gh",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-sm", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" }) }),
                      "View on GitHub"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      document.body
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  A11yWidget,
  a11y
});
