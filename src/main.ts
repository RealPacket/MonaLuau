import './style.css'
import * as monaco from 'monaco-editor';
import { initEnv } from "./monacoEnv";
import { init } from "./languages/luau/init";

init(); initEnv();

monaco.editor.defineTheme("krnlDark", {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "#C3CCDB" },
    { token: "variable.language.self", foreground: "#F7768E" },
    { token: "variable.parameter.variadic", foreground: "#F7768E" },
    { token: "variable.parameter.function", foreground: "#E0AF68" },
    { token: "variable.other.constant", foreground: "#FF9E64" },
    { token: "variable.property", foreground: "#7DCFFF" },
    { token: "variable.object.property", foreground: "#73DACA" },

    { token: "keyword", foreground: "#BB9AF7" },
    {
      token: "keyword.local",
      foreground: "#997BD6",
      fontStyle: "italic"
    },
    { token: "keyword.operator", foreground: "#89DDFF" },
    {
      token: "keyword.operator.type.annotation",
      foreground: "#9ABDF5"
    },
    {
      token: "keyword.operator.typedef.annotation",
      foreground: "#89DDFF"
    },
    {
      token: "keyword.control.export",
      foreground: "#997BD6",
      fontStyle: "italic"
    },

    { token: "operator", foreground: "#89DDFF" },
    { token: "operator.type", foreground: "#BB9AF7" },
    { token: "operator.special", foreground: "#BB9AF7" },

    { token: "entity.name.type.alias", foreground: "#5ab6d6" },
    { token: "entity.name.function", foreground: "#7AA2F7" },

    { token: "global", foreground: "#7AA2F7" },

    { token: "storage.type", foreground: "#BB9AF7" },

    { token: "comment", foreground: "#666666", fontStyle: "italic" },
    {
      token: "comment.highlight.title",
      foreground: "#89DDFF",
      fontStyle: "italic"
    },
    {
      token: "comment.highlight.name",
      foreground: "#89DDFF",
      fontStyle: "italic"
    },
    {
      token: "comment.delimiter.modifier",
      foreground: "#9ABDF5",
      fontStyle: "italic"
    },
    {
      token: "comment.highlight.modifier",
      foreground: "#7DCFFF",
      fontStyle: "italic"
    },
    {
      token: "comment.highlight.descriptor",
      foreground: "#F7768E",
      fontStyle: "italic"
    },

    { token: "delimiter.longstring", foreground: "#89DDFF" },
    { token: "delimiter.bracket", foreground: "#a6afbd" },
    { token: "delimiter.array", foreground: "#a6afbd" },
    { token: "delimiter.parenthesis", foreground: "#a6afbd" },
    { token: "delimiter", foreground: "#a6afbd" },

    { token: "string", foreground: "#9ECE6A" },
    { token: "string_double", foreground: "#9ECE6A" },
    { token: "string_single", foreground: "#9ECE6A" },
    { token: "string_backtick", foreground: "#9ECE6A" },
    { token: "longstring", foreground: "#9ECE6A" },
    { token: "string.delimeter", foreground: "#89DDFF" },
    { token: "string.escape", foreground: "#89DDFF" },

    { token: "punctuation.separator.arguments", foreground: "#9ABDF5" },
    { token: "punctuation.separator.parameter", foreground: "#89DDFF" },
    { token: "punctuation.separator.table", foreground: "#89DDFF" },
    { token: "punctuation.definition.block", foreground: "#9ABDF5" },
    {
      token: "punctuation.definition.parameters",
      foreground: "#9ABDF5"
    },
    {
      token: "punctuation.definition.typeparameters",
      foreground: "#89DDFF"
    },

    { token: "constant.language", foreground: "#FF9E64" },
    { token: "number", foreground: "#FF9E64" },
    { token: "constants", foreground: "#FF9E64" },

    { token: "support.function", foreground: "#0DB9D7" },
    { token: "support.function.library", foreground: "#0DB9D7" },
    { token: "support.type", foreground: "#0DB9D7" },
    { token: "support.function", foreground: "#0DB9D7" },
    { token: "support.function.library", foreground: "#0DB9D7" },
    { token: "support.type", foreground: "#5ab6d6" }
  ],
  colors: {
    // "editor.background": "#222222",
    "editor.background": "#00000000", // no need for bg so transparent

    "editorLineNumber.foreground": "#7A7A7A",
    "editorLineNumber.activeForeground": "#BBBBBB",

    "editor.lineHighlightBackground": "#141414cc",

    "editorIndentGuide.background": "#282828",

    "editorSuggestWidget.background": "#181818",
    "editorSuggestWidget.border": "#000000",
    "editorSuggestWidget.foreground": "#D5D5D5",
    "editorSuggestWidget.selectedBackground": "#363636",
    "editorSuggestWidget.highlightForeground": "#18A0FB",

    "textCodeBlock.background": "#181818"
  }
});

monaco.editor.create(document.querySelector("#monaco")!, {
  value: "-- @supported-envs Krnl syn syn-v3 script-ware\n-- @luau-features str-templates\n\n",
  language: "luau",
  theme: "krnlDark",
  fontSize: 14,
  fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace",
  folding: true,
  // autoIndent: true,
  dragAndDrop: true,
  links: true,
  minimap: {
    enabled: true,
    renderCharacters: false,
    scale: 100
  },
  showFoldingControls: "always",
  smoothScrolling: true,
  stopRenderingLineAfter: 6500,
  cursorBlinking: "smooth",
  cursorSmoothCaretAnimation: "on",
  foldingHighlight: false,
  fontLigatures: true,
  formatOnPaste: true,
  showDeprecated: false,
  suggest: {
    snippetsPreventQuickSuggestions: true
  },
  padding: {
    top: 24
  }
});
