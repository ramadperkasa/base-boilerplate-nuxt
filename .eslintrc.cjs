module.exports = {
  root: true,
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "plugin:vue/vue3-recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "no-trailing-spaces": ["warn"],
    "prefer-promise-reject-errors": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["error", "Error"],
      },
    ],
  },
  ignorePatterns: ["dist", "node_modules", "build", "coverage", "docs", "test"],
  overrides: [
    {
      files: ["components/**/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
};
