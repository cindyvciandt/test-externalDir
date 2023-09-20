import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import esbuild from 'rollup-plugin-esbuild'
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const outputOptions = {
  preserveModules: true,
  preserveModulesRoot: 'src',
  exports: 'named',
  // globals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
}

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  esbuild({
    sourceMap: false,
    minify: true,
  })
]

function createBundleConfig() {
  return [
    {
      input: 'src/index.ts',
      plugins,
      external: [/node_modules/],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          // entryFileNames: '[name].mjs',
          entryFileNames({ name }) {
            return `${name.replace(/\.css$/, '.css.vanilla')}.mjs`
          },
          ...outputOptions
        },
        {
          dir: 'dist',
          format: 'cjs',
          entryFileNames({ name }) {
            return `${name.replace(/\.css$/, '.css.vanilla')}.js`
          },
          ...outputOptions
        },
      ],
    },
    // Declaration files
    {
      input: 'src/index.ts',
      plugins: [
        // ...plugins,
        dts(),
      ],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
  ]
}

export default args => {
  if (args['config-remove']) {
    return createRemoveConfig()
  }
  else {
    return createBundleConfig()
  }
}
