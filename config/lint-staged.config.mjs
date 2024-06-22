export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome lint --write --no-errors-on-unmatched",
  ],
  "**/*.{js,jsx,mjs,cjs,ts,tsx,yml,json,html,md}": [
    "biome format --write --no-errors-on-unmatched",
  ],
  "package.json": "sort-package-json",
};
