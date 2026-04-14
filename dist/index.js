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

// src/i18n/ar.js
var ar = [
  "\u062E\u064A\u0627\u0631\u0627\u062A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
  "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
  "\u0625\u063A\u0644\u0627\u0642 \u0644\u0648\u062D\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
  "\u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
  "WCAG 2.1 \xB7 \u062E\u0635\u0635 \u062A\u062C\u0631\u0628\u062A\u0643",
  "\u062D\u062C\u0645 \u0627\u0644\u0646\u0635",
  "\u0639\u0627\u062F\u064A",
  "\u0643\u0628\u064A\u0631",
  "\u0643\u0628\u064A\u0631 \u062C\u062F\u0627",
  "\u062A\u0628\u0627\u064A\u0646 \u0639\u0627\u0644",
  "\u064A\u0632\u064A\u062F \u062A\u0628\u0627\u064A\u0646 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
  "\u0639\u0643\u0633 \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
  "\u064A\u0639\u0643\u0633 \u062C\u0645\u064A\u0639 \u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u062D\u0629",
  "\u062A\u062F\u0631\u062C \u0631\u0645\u0627\u062F\u064A",
  "\u064A\u0632\u064A\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629",
  "\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",
  "\u064A\u0648\u0642\u0641 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629 \u0648\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644\u0627\u062A",
  "\u0625\u0628\u0631\u0627\u0632 \u0627\u0644\u0631\u0648\u0627\u0628\u0637",
  "\u064A\u062C\u0639\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0648\u0627\u0636\u062D\u0629 \u0628\u0646\u0638\u0631\u0629 \u0648\u0627\u062D\u062F\u0629",
  "\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u0646\u0635",
  "\u064A\u0632\u064A\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u062D\u0631\u0648\u0641 \u0648\u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0633\u0637\u0631",
  "\u062E\u0637 \u0633\u0647\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
  "\u064A\u0628\u062F\u0644 \u0625\u0644\u0649 \u062E\u0637 \u0639\u0627\u0644\u064A \u0627\u0644\u0648\u0636\u0648\u062D \u0648\u0633\u0647\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
  "\u062D\u0648\u0644 \u0647\u0630\u0647 \u0627\u0644\u0623\u062F\u0627\u0629",
  "\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0644",
  "\u0639\u0631\u0636 \u0639\u0644\u0649 GitHub",
  "\u064A\u062A\u0645 \u062A\u0642\u062F\u064A\u0645 \u0623\u062F\u0627\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0647\u0630\u0647 \u0645\u062C\u0627\u0646\u0627 \u0645\u0646 {brand} \u0643\u0623\u062F\u0627\u0629 \u0645\u0641\u062A\u0648\u062D\u0629 \u0627\u0644\u0645\u0635\u062F\u0631 \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u062C\u0639\u0644 \u0627\u0644\u0648\u064A\u0628 \u0623\u0643\u062B\u0631 \u0633\u0647\u0648\u0644\u0629. \u064A\u062A\u0645 \u062D\u0641\u0638 \u062A\u0641\u0636\u064A\u0644\u0627\u062A\u0643 \u0645\u062D\u0644\u064A\u0627 \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0648\u0644\u0627 \u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0623\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0625\u0644\u0649 \u0623\u064A \u062E\u0627\u062F\u0645."
];
var ar_default = ar;

// src/i18n/de.js
var de = [
  "Barrierefreiheitsoptionen",
  "Barrierefreiheitseinstellungen",
  "Bedienfeld fur Barrierefreiheit schliessen",
  "Barrierefreiheit",
  "WCAG 2.1 \xB7 Passen Sie Ihr Erlebnis an",
  "Textgrosse",
  "Normal",
  "Gross",
  "Sehr gross",
  "Hoher Kontrast",
  "Erhoht den Farbkontrast fur bessere Lesbarkeit",
  "Farben umkehren",
  "Kehrt alle Seitenfarben um",
  "Graustufen",
  "Entfernt alle Farben von der Seite",
  "Bewegung reduzieren",
  "Stoppt Animationen und Ubergange",
  "Links hervorheben",
  "Macht alle Links auf einen Blick sichtbar",
  "Textabstand",
  "Erhoht den Abstand zwischen Buchstaben, Wortern und Zeilen",
  "Dyslexie-Schrift",
  "Wechselt zu einer gut lesbaren Schriftart",
  "Uber dieses Widget",
  "Alles zurucksetzen",
  "Auf GitHub ansehen",
  "Dieses Barrierefreiheits-Widget wird von {brand} kostenlos als Open-Source-Tool bereitgestellt, um das Web zuganglicher zu machen. Es speichert Ihre Einstellungen lokal in Ihrem Browser und sendet keine Daten an einen Server."
];
var de_default = de;

// src/i18n/en.js
var en = [
  "Accessibility options",
  "Accessibility settings",
  "Close accessibility panel",
  "Accessibility",
  "WCAG 2.1 \xB7 Personalize your experience",
  "Text Size",
  "Normal",
  "Large",
  "X-Large",
  "High Contrast",
  "Increase color contrast for readability",
  "Invert Colors",
  "Invert all page colors",
  "Grayscale",
  "Remove all color from the page",
  "Reduce Motion",
  "Stop animations and transitions",
  "Highlight Links",
  "Make all links visible at a glance",
  "Text Spacing",
  "Increase letter, word, and line spacing",
  "Dyslexia Font",
  "Switch to a high-readability typeface",
  "About this widget",
  "Reset all",
  "View on GitHub",
  "This accessibility widget is provided free of charge by {brand} as an open-source tool to help make the web more accessible. It stores your preferences locally in your browser and sends no data to any server."
];
var en_default = en;

// src/i18n/es.js
var es = [
  "Opciones de accesibilidad",
  "Configuracion de accesibilidad",
  "Cerrar panel de accesibilidad",
  "Accesibilidad",
  "WCAG 2.1 \xB7 Personaliza tu experiencia",
  "Tamano del texto",
  "Normal",
  "Grande",
  "Muy grande",
  "Alto contraste",
  "Aumenta el contraste de color para facilitar la lectura",
  "Invertir colores",
  "Invierte todos los colores de la pagina",
  "Escala de grises",
  "Elimina todo el color de la pagina",
  "Reducir movimiento",
  "Detiene animaciones y transiciones",
  "Resaltar enlaces",
  "Hace visibles todos los enlaces de un vistazo",
  "Espaciado de texto",
  "Aumenta el espaciado entre letras, palabras y lineas",
  "Fuente para dislexia",
  "Cambia a una tipografia de alta legibilidad",
  "Acerca de este widget",
  "Restablecer todo",
  "Ver en GitHub",
  "Este widget de accesibilidad es ofrecido sin costo por {brand} como una herramienta de codigo abierto para ayudar a que la web sea mas accesible. Guarda tus preferencias localmente en tu navegador y no envia datos a ningun servidor."
];
var es_default = es;

// src/i18n/fr.js
var fr = [
  "Options d'accessibilite",
  "Parametres d'accessibilite",
  "Fermer le panneau d'accessibilite",
  "Accessibilite",
  "WCAG 2.1 \xB7 Personnalisez votre experience",
  "Taille du texte",
  "Normale",
  "Grande",
  "Tres grande",
  "Contraste eleve",
  "Augmente le contraste des couleurs pour ameliorer la lisibilite",
  "Inverser les couleurs",
  "Inverse toutes les couleurs de la page",
  "Niveaux de gris",
  "Supprime toutes les couleurs de la page",
  "Reduire les animations",
  "Arrete les animations et les transitions",
  "Mettre les liens en evidence",
  "Rend tous les liens visibles en un coup d'oeil",
  "Espacement du texte",
  "Augmente l'espacement des lettres, des mots et des lignes",
  "Police dyslexie",
  "Passe a une police tres lisible",
  "A propos de ce widget",
  "Tout reinitialiser",
  "Voir sur GitHub",
  "Ce widget d'accessibilite est propose gratuitement par {brand} comme outil open source pour rendre le web plus accessible. Il stocke vos preferences localement dans votre navigateur et n'envoie aucune donnee a un serveur."
];
var fr_default = fr;

// src/i18n/hi.js
var hi = [
  "\u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940 \u0935\u093F\u0915\u0932\u094D\u092A",
  "\u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940 \u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
  "\u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940 \u092A\u0948\u0928\u0932 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
  "\u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940",
  "WCAG 2.1 \xB7 \u0905\u092A\u0928\u0947 \u0905\u0928\u0941\u092D\u0935 \u0915\u094B \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0915\u0930\u0947\u0902",
  "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0906\u0915\u093E\u0930",
  "\u0938\u093E\u092E\u093E\u0928\u094D\u092F",
  "\u092C\u0921\u093C\u093E",
  "\u092C\u0939\u0941\u0924 \u092C\u0921\u093C\u093E",
  "\u0909\u091A\u094D\u091A \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
  "\u092A\u0922\u093C\u0928\u0947 \u092E\u0947\u0902 \u0906\u0938\u093E\u0928\u0940 \u0915\u0947 \u0932\u093F\u090F \u0930\u0902\u0917 \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F \u092C\u0922\u093C\u093E\u090F\u0902",
  "\u0930\u0902\u0917 \u0909\u0932\u091F\u0947\u0902",
  "\u092A\u0947\u091C \u0915\u0947 \u0938\u092D\u0940 \u0930\u0902\u0917 \u0909\u0932\u091F\u0947\u0902",
  "\u0917\u094D\u0930\u0947-\u0938\u094D\u0915\u0947\u0932",
  "\u092A\u0947\u091C \u0938\u0947 \u0938\u092D\u0940 \u0930\u0902\u0917 \u0939\u091F\u093E \u0926\u0947\u0902",
  "\u0917\u0924\u093F\u0936\u0940\u0932\u0924\u093E \u0915\u092E \u0915\u0930\u0947\u0902",
  "\u090F\u0928\u0940\u092E\u0947\u0936\u0928 \u0914\u0930 \u091F\u094D\u0930\u093E\u0902\u091C\u093F\u0936\u0928 \u0930\u094B\u0915\u0947\u0902",
  "\u0932\u093F\u0902\u0915 \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
  "\u0938\u092D\u0940 \u0932\u093F\u0902\u0915 \u090F\u0915 \u0928\u091C\u0930 \u092E\u0947\u0902 \u0926\u093F\u0916\u093E\u090F\u0902",
  "\u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0938\u094D\u092A\u0947\u0938\u093F\u0902\u0917",
  "\u0905\u0915\u094D\u0937\u0930\u094B\u0902, \u0936\u092C\u094D\u0926\u094B\u0902 \u0914\u0930 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u0947 \u092C\u0940\u091A \u0926\u0942\u0930\u0940 \u092C\u0922\u093C\u093E\u090F\u0902",
  "\u0930\u0940\u0921\u093F\u0902\u0917-\u092B\u094D\u0930\u0947\u0902\u0921\u0932\u0940 \u092B\u0949\u0928\u094D\u091F",
  "\u091C\u094D\u092F\u093E\u0926\u093E \u092A\u0920\u0928\u0940\u092F \u091F\u093E\u0907\u092A\u092B\u0947\u0938 \u092A\u0930 \u0938\u094D\u0935\u093F\u091A \u0915\u0930\u0947\u0902",
  "\u0907\u0938 \u0935\u093F\u091C\u0947\u091F \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
  "\u0938\u092C \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902",
  "GitHub \u092A\u0930 \u0926\u0947\u0916\u0947\u0902",
  "\u092F\u0939 \u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940 \u0935\u093F\u091C\u0947\u091F {brand} \u0926\u094D\u0935\u093E\u0930\u093E \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0909\u092A\u0932\u092C\u094D\u0927 \u0915\u0930\u093E\u092F\u093E \u0917\u092F\u093E \u0939\u0948 \u0924\u093E\u0915\u093F \u0935\u0947\u092C \u0915\u094B \u0905\u0927\u093F\u0915 \u0938\u0941\u0932\u092D \u092C\u0928\u093E\u0928\u0947 \u092E\u0947\u0902 \u092E\u0926\u0926 \u092E\u093F\u0932 \u0938\u0915\u0947\u0964 \u092F\u0939 \u0906\u092A\u0915\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E\u0913\u0902 \u0915\u094B \u0915\u0947\u0935\u0932 \u0906\u092A\u0915\u0947 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0938\u094D\u0925\u093E\u0928\u0940\u092F \u0930\u0942\u092A \u0938\u0947 \u0938\u0939\u0947\u091C\u0924\u093E \u0939\u0948 \u0914\u0930 \u0915\u093F\u0938\u0940 \u092D\u0940 \u0938\u0930\u094D\u0935\u0930 \u0915\u094B \u0915\u094B\u0908 \u0921\u0947\u091F\u093E \u0928\u0939\u0940\u0902 \u092D\u0947\u091C\u0924\u093E\u0964"
];
var hi_default = hi;

// src/i18n/pt.js
var pt = [
  "Opcoes de acessibilidade",
  "Configuracoes de acessibilidade",
  "Fechar painel de acessibilidade",
  "Acessibilidade",
  "WCAG 2.1 \xB7 Personalize sua experiencia",
  "Tamanho do texto",
  "Normal",
  "Grande",
  "Muito grande",
  "Alto contraste",
  "Aumenta o contraste das cores para facilitar a leitura",
  "Inverter cores",
  "Inverte todas as cores da pagina",
  "Escala de cinza",
  "Remove todas as cores da pagina",
  "Reduzir movimento",
  "Interrompe animacoes e transicoes",
  "Destacar links",
  "Deixa todos os links visiveis rapidamente",
  "Espacamento do texto",
  "Aumenta o espacamento entre letras, palavras e linhas",
  "Fonte para dislexia",
  "Troca para uma fonte de alta legibilidade",
  "Sobre este widget",
  "Redefinir tudo",
  "Ver no GitHub",
  "Este widget de acessibilidade e oferecido gratuitamente por {brand} como uma ferramenta de codigo aberto para tornar a web mais acessivel. Ele armazena suas preferencias localmente no navegador e nao envia dados para nenhum servidor."
];
var pt_default = pt;

// src/i18n/zh.js
var zh = [
  "\u65E0\u969C\u788D\u9009\u9879",
  "\u65E0\u969C\u788D\u8BBE\u7F6E",
  "\u5173\u95ED\u65E0\u969C\u788D\u9762\u677F",
  "\u65E0\u969C\u788D",
  "WCAG 2.1 \xB7 \u81EA\u5B9A\u4E49\u4F60\u7684\u4F7F\u7528\u4F53\u9A8C",
  "\u6587\u5B57\u5927\u5C0F",
  "\u6807\u51C6",
  "\u5927",
  "\u8D85\u5927",
  "\u9AD8\u5BF9\u6BD4\u5EA6",
  "\u63D0\u9AD8\u989C\u8272\u5BF9\u6BD4\u5EA6\u4EE5\u589E\u5F3A\u53EF\u8BFB\u6027",
  "\u53CD\u8F6C\u989C\u8272",
  "\u53CD\u8F6C\u9875\u9762\u4E0A\u7684\u6240\u6709\u989C\u8272",
  "\u7070\u5EA6\u6A21\u5F0F",
  "\u79FB\u9664\u9875\u9762\u4E0A\u7684\u6240\u6709\u989C\u8272",
  "\u51CF\u5C11\u52A8\u6001\u6548\u679C",
  "\u505C\u6B62\u52A8\u753B\u548C\u8FC7\u6E21\u6548\u679C",
  "\u9AD8\u4EAE\u94FE\u63A5",
  "\u8BA9\u6240\u6709\u94FE\u63A5\u4E00\u773C\u53EF\u89C1",
  "\u6587\u5B57\u95F4\u8DDD",
  "\u589E\u52A0\u5B57\u6BCD\u3001\u5355\u8BCD\u548C\u884C\u4E4B\u95F4\u7684\u95F4\u8DDD",
  "\u9605\u8BFB\u53CB\u597D\u5B57\u4F53",
  "\u5207\u6362\u4E3A\u66F4\u6613\u8BFB\u7684\u5B57\u4F53",
  "\u5173\u4E8E\u6B64\u7EC4\u4EF6",
  "\u91CD\u7F6E\u5168\u90E8",
  "\u5728 GitHub \u4E0A\u67E5\u770B",
  "\u8FD9\u4E2A\u65E0\u969C\u788D\u7EC4\u4EF6\u7531 {brand} \u514D\u8D39\u63D0\u4F9B\uFF0C\u4F5C\u4E3A\u5E2E\u52A9\u63D0\u5347\u7F51\u9875\u53EF\u8BBF\u95EE\u6027\u7684\u5F00\u6E90\u5DE5\u5177\u3002\u5B83\u53EA\u4F1A\u5C06\u4F60\u7684\u504F\u597D\u4FDD\u5B58\u5728\u672C\u5730\u6D4F\u89C8\u5668\u4E2D\uFF0C\u4E0D\u4F1A\u5411\u4EFB\u4F55\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\u3002"
];
var zh_default = zh;

// src/i18n/index.js
var MESSAGE_KEYS = [
  "aria.triggerLabel",
  "aria.dialogLabel",
  "aria.closeLabel",
  "header.title",
  "header.subtitle",
  "textSize.label",
  "textSize.options.0",
  "textSize.options.1",
  "textSize.options.2",
  "toggles.highContrast.label",
  "toggles.highContrast.desc",
  "toggles.invertColors.label",
  "toggles.invertColors.desc",
  "toggles.grayscale.label",
  "toggles.grayscale.desc",
  "toggles.reduceMotion.label",
  "toggles.reduceMotion.desc",
  "toggles.highlightLinks.label",
  "toggles.highlightLinks.desc",
  "toggles.textSpacing.label",
  "toggles.textSpacing.desc",
  "toggles.dyslexia.label",
  "toggles.dyslexia.desc",
  "footer.about",
  "footer.reset",
  "footer.github",
  "notice.body"
];
var RAW_TRANSLATIONS = {
  ar: ar_default,
  de: de_default,
  en: en_default,
  es: es_default,
  fr: fr_default,
  hi: hi_default,
  pt: pt_default,
  zh: zh_default
};
var RTL_LANGUAGES = /* @__PURE__ */ new Set(["ar"]);
function isIndexSegment(value) {
  return /^\d+$/.test(value);
}
function setMessage(target, path, value) {
  const segments = path.split(".");
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
  const resolved = MESSAGE_KEYS.map((_, index) => messages[index] ?? en_default[index]);
  const result = {};
  MESSAGE_KEYS.forEach((key, index) => {
    setMessage(result, key, resolved[index]);
  });
  return result;
}
var TRANSLATIONS = Object.freeze(
  Object.fromEntries(
    Object.entries(RAW_TRANSLATIONS).map(([code, messages]) => [code, buildMessages(messages)])
  )
);
var SUPPORTED_LANGUAGES = Object.freeze(Object.keys(TRANSLATIONS));
function normalizeLanguage(value) {
  if (typeof value !== "string") return "en";
  const normalized = value.trim().toLowerCase();
  if (!normalized) return "en";
  if (TRANSLATIONS[normalized]) return normalized;
  const baseLanguage = normalized.split("-")[0];
  return TRANSLATIONS[baseLanguage] ? baseLanguage : "en";
}
function getMessages(value) {
  return TRANSLATIONS[normalizeLanguage(value)];
}
function isRtlLanguage(value) {
  return RTL_LANGUAGES.has(normalizeLanguage(value));
}

// src/widget.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var STORAGE_KEY = "pgm-a11y";
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
function renderBrandNotice(template, brandNode) {
  const [before, after = ""] = template.split("{brand}");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    before,
    brandNode,
    after
  ] });
}
var TOGGLES = [
  {
    key: "highContrast",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v20" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a10 10 0 0 1 0 20", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "invertColors",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18M3 12h18" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3a9 9 0 0 1 0 18", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "grayscale",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4", fill: "currentColor", stroke: "none" })
    ] })
  },
  {
    key: "reduceMotion",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l-7 7 7 7" }) })
  },
  {
    key: "highlightLinks",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ] })
  },
  {
    key: "textSpacing",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) })
  },
  {
    key: "dyslexia",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", className: "pgm-icon", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7V4h16v3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 20h6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v16" })
    ] })
  }
];
function A11y({ className, theme = null, lang = "en" }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [prefs, setPrefs] = (0, import_react.useState)(DEFAULTS);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const [notice, setNotice] = (0, import_react.useState)(false);
  const [license, setLicense] = (0, import_react.useState)({ status: "checking", plan: "free" });
  const [pageTheme, setPageTheme] = (0, import_react.useState)("light");
  const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)("light");
  const triggerRef = (0, import_react.useRef)(null);
  const wasOpenRef = (0, import_react.useRef)(false);
  const explicitTheme = normalizeTheme(theme);
  const resolvedLanguage = normalizeLanguage(lang);
  const messages = getMessages(resolvedLanguage);
  const direction = isRtlLanguage(resolvedLanguage) ? "rtl" : "ltr";
  const triggerTheme = className ? null : explicitTheme ?? pageTheme;
  const textSizeLabels = messages.textSize.options;
  const closeDialog = () => setOpen(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
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
    setResolvedTheme(explicitTheme ?? pageTheme);
  }, [explicitTheme, pageTheme]);
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
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (wasOpenRef.current && !open) {
      (_a = triggerRef.current) == null ? void 0 : _a.focus();
    }
    wasOpenRef.current = open;
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
  const isModified = JSON.stringify(prefs) !== JSON.stringify(DEFAULTS);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref: triggerRef,
        type: "button",
        "aria-label": messages.aria.triggerLabel,
        "aria-expanded": open,
        "aria-haspopup": "dialog",
        onClick: () => setOpen((v) => !v),
        className: `pgm-btn a11y-widget-btn${className ? ` ${className}` : ""}`,
        "data-pgm-theme": triggerTheme,
        lang: resolvedLanguage,
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
            onClick: closeDialog,
            "aria-hidden": "true",
            "data-pgm-theme": resolvedTheme
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": messages.aria.dialogLabel,
            className: "pgm-dialog a11y-widget-dialog",
            "data-pgm-theme": resolvedTheme,
            dir: direction,
            lang: resolvedLanguage,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-header", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pgm-header-title", children: messages.header.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pgm-header-subtitle", children: messages.header.subtitle })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-label": messages.aria.closeLabel,
                    onClick: closeDialog,
                    className: "pgm-close-btn",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-sm", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12", strokeLinecap: "round" }) })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-size-section", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pgm-size-header", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-size-label", children: messages.textSize.label }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-size-value", children: textSizeLabels[prefs.textSize] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pgm-size-btns", children: textSizeLabels.map((lbl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pgm-toggle-list", children: TOGGLES.map(({ key, icon }) => {
                const on = prefs[key];
                const toggleCopy = messages.toggles[key];
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
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pgm-toggle-label${on ? " pgm-toggle-label--on" : ""}`, children: toggleCopy.label }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pgm-toggle-desc", children: toggleCopy.desc })
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
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: messages.footer.about }),
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
                    children: messages.footer.reset
                  }
                )
              ] }),
              !isPro && notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { id: "pgm-notice", className: "pgm-notice", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pgm-notice-text", children: renderBrandNotice(
                  messages.notice.body,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "a",
                    {
                      href: "https://github.com/pigmilcom/a11y",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "pgm-notice-link",
                      children: "PIGMIL"
                    }
                  )
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "a",
                  {
                    href: "https://github.com/pigmilcom/a11y",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pgm-notice-gh",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", className: "pgm-icon-sm", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" }) }),
                      messages.footer.github
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
