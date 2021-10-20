#!/usr/bin/env node

const rollup = require("rollup");
const path = require("path");
const rimraf = require("rimraf");
const resolve = require("@rollup/plugin-node-resolve").default;
const esbuild = require("rollup-plugin-esbuild");

const currentWorkingPath = process.cwd();
const { src, name } = require(path.join(currentWorkingPath, "package.json"));
const OUTDIR = path.join(currentWorkingPath, "dist");

const INPUTPATH = path.join(currentWorkingPath, src);

// Little workaround to get package name without scope
const fileName = name.replace("@fitfab/", "");

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// see below for details on the options
const inputOptions = {
  input: INPUTPATH,
  /**
   * NOTE: "@babel/runtime" from https://www.npmjs.com/package/@rollup/plugin-babel
   * 'runtime' - you should use this especially when building libraries with Rollup.
   * It has to be used in combination with @babel/plugin-transform-runtime and
   * you should also specify @babel/runtime as dependency of your package.
   * Tell Rollup to treat the helpers imported from within the @babel/runtime module
   * as external dependencies when bundling for cjs & es formats.
   */
  external: ["react", "react-dom", "@babel/runtime", "styled-components"],
  plugins: [
    resolve(),
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: false, // default
      // minify: process.env.NODE_ENV === 'production',
      target: "esnext", // default, or 'es20XX', 'esnext'
      jsx: "transform", // default, or 'preserve'
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
      tsconfig: "tsconfig.json", // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        ".json": "json",
        // Enable JSX in .js files too
        ".js": "jsx",
      },
    }),
  ],
};

const outputOptions = [
  {
    dir: OUTDIR, // Use dir when "preserveModules" is set to true
    entryFileNames: `${fileName}.js`,
    format: "esm",
    preserveModules: true, // This one is important for treeshaking
  },
];

async function build() {
  // Clean dist folder
  await rimraf(OUTDIR, {}, (err) => {
    if (err) {
      console.error(err);
    }
  });

  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
