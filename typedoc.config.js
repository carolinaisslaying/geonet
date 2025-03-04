/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["src/**/*.ts" , "@types/**/*.ts"],
    exclude: ["**/*.test.ts"],
    out: "docs",
    name: "GeoNet API Documentation",
    theme: "default",
    categorizeByGroup: true,
    categoryOrder: ["Services", "Types", "*"],
    cleanOutputDir: true,
    includeVersion: true,
    githubPages: true,
    readme: "README.md",
    tsconfig: "./tsconfig.json",
    excludePrivate: true,
    excludeProtected: true,
    excludeInternal: true,
    searchInComments: true,
    skipErrorChecking: false
  };