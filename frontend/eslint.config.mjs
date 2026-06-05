import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Catch leftover debug output
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Unused vars are almost always a mistake
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      // Explicit `any` defeats TypeScript
      "@typescript-eslint/no-explicit-any": "warn",
      // Prefer const where possible
      "prefer-const": "error",
    },
  },
]);

export default eslintConfig;
