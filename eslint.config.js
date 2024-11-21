import antfu from "@antfu/eslint-config";
import nuxt from "./.nuxt/eslint.config.mjs";

export default nuxt(
  antfu({
    stylistic: {
      indent: "tab",
      semi: true,
      quotes: "double",
    },

    typescript: true,
    vue: true,
    formatters: true,

    // Ensure plugins are shared between configs
    standalone: false,
    ignores: [],

    // Disable conflicting rules
    rules: {
      "import/first": "off",
      "import/no-duplicates": "off",
    },
  }),
);
