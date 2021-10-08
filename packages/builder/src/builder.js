#!/usr/bin/env node

const rollup = require("rollup");
const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;

const currentWorkingPath = process.cwd();
const { main, name } = require(path.join(currentWorkingPath, "package.json"));

const inputPath = path.join(currentWorkingPath, main);

// Little workaround to get package name without scope
const fileName = name.replace("@fitfab/", "");

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// see below for details on the options
const inputOptions = {
  input: inputPath,
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    babel({
      extensions: EXTENSIONS,
      presets: [
        "@babel/preset-typescript",
        "@babel/preset-env",
        "@babel/preset-react",
      ],
      babelHelpers: "bundled",
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
    }),
  ],
};

const outputOptions = [
  {
    dir: path.join(currentWorkingPath, "dist"), // Use dir when "preserveModules" is set to true
    format: "esm",
    preserveModules: true, // This one is important for treeshaking
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    console.log("options: ", options);
    await bundle.write(options);
  });
}

build();
