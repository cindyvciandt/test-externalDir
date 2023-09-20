module.exports = {
  extends: ["custom/next"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: "module",
  },
};
