export default {
  "**/*.{ts,tsx}": (filenames) =>
    `rome check ${filenames.join(" ")} --apply-suggested`,
};
