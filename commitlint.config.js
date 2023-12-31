module.exports = {
  extends: [require.resolve("@commitlint/config-conventional")],
  rules: {
    "scope-case": [0],
    "scope-enum": [2, "always", ["a", "b", "c"]],
    "footer-max-line-length": [2, "always", 150],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "improve",
      ],
    ],
  },
};
