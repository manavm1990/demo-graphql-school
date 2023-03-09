module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  overrides: [
    {
      files: ["*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: [
        "plugin:@graphql-eslint/schema-recommended",
        "plugin:@graphql-eslint/operations-recommended",
      ],
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"],
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
  },
};
