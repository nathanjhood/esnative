//@ts-check

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('typescript-eslint').Config} */
const configs = [
  { files: ["**/*.{js,mjs,cjs,ts,d.ts}"] },
  useGlobals("node"),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
  // Make sure to put this last, so it gets the chance to override other configs
  eslintConfigPrettier,
];

export default configs;

/**
 *
 * @param {'node' | 'browser'} mode
 */
function useGlobals(mode) {
  //

  // settings for browser-based apps
  // (treat all '*.js' files as common application/scripts)
  const globalsEnvBrowser = {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  };

  // settings for node-based apps
  const globalsEnvNode = { languageOptions: { globals: globals.node } };

  // toggle returned settings on input parameter
  switch (mode) {
    case "node": {
      return globalsEnvNode;
    }
    case "browser": {
      return globalsEnvBrowser;
    }
    default: {
      return {};
    }
  }
}
