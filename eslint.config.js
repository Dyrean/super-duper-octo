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
	}),
);
