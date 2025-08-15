// CommonJS version to avoid ESM loader issues in CI/Vercel
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [...compat.extends("next/core-web-vitals", "next/typescript")];
