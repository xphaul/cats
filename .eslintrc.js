module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [`airbnb`, `plugin:prettier/recommended`],
  plugins: [`@typescript-eslint`, `prettier`, `react-hooks`],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    cy: true,
    Cypress: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        argsIgnorePattern: `res|next|stage|^err|on|config|e|_`,
      },
    ],
    "arrow-body-style": [2, `as-needed`],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
    "no-unused-expressions": [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-prototype-builtins": 0,
    quotes: `off`,
    "@typescript-eslint/quotes": [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    "spaced-comment": [2, `always`, { exceptions: [`-`, `+`], markers: [`/`] }],
    "no-use-before-define": 0,
    "no-plusplus": 0,
    "no-continue": 0,
    "no-shadow": 0,
    "linebreak-style": 0,
    import: 0,
    camelcase: 1,
    "import/no-unresolved": 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "space-before-function-paren": 0,
    "import/extensions": 0,
    "import/no-anonymous-default-export": 2,
    "react/jsx-one-expression-per-line": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [`.js`, `.jsx`, `.tsx`, `.ts`],
      },
    ],
    "react-hooks/rules-of-hooks": `error`,
    "react-hooks/exhaustive-deps": `warn`,
    "react/jsx-props-no-spreading": 0,
    "react/no-unstable-nested-components": 0,
    "react/forbid-prop-types": 0,
    indent: [`error`, 2, { SwitchCase: 1 }],
    "jsx-a11y/href-no-hash": `off`,
    "jsx-a11y/aria-role": 0,
    "jsx-a11y/anchor-is-valid": [
      `warn`,
      {
        aspects: [`invalidHref`],
      },
    ],
    "prettier/prettier": 2,
    "class-methods-use-this": 0,
  },
};
