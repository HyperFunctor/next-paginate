// @ts-check
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import prettier from "rollup-plugin-prettier";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import license from "rollup-plugin-license";

import pkg from "./package.json";

const shouldPrettify = process.env.PRETTIFY_BUNDLES ? true : false;

const rollupConfig = [
  {
    input: "src/index.tsx",
    output: [
      {
        format: "es",
        dir: "./",
        entryFileNames: pkg.exports.import.replace(/^\.\//, ""),
        sourcemap: !shouldPrettify,
        plugins: [
          shouldPrettify
            ? prettier({
                parser: "typescript",
              })
            : terser({
                compress: true,
                mangle: true,
                ecma: 2020,
              }),
        ],
      },
      {
        format: "cjs",
        dir: "./",
        entryFileNames: pkg.exports.require.replace(/^\.\//, ""),
        sourcemap: !shouldPrettify,
        plugins: [
          shouldPrettify
            ? prettier({
                parser: "typescript",
              })
            : terser({
                compress: true,
                mangle: true,
                ecma: 2020,
              }),
        ],
      },
    ],
    external: ["react", "next", "next/link", "next/router"],
    plugins: [
      resolve(),
      commonjs({
        include: "node_modules/**",
      }),
      typescript({
        tsconfig: "tsconfig.json",
        declaration: true,
        declarationDir: "dist/",
        rootDir: "src/",
      }),
      filesize({}),
      license({
        banner: `
      <%= pkg.name %>@<%= pkg.version %>
      Copyright (c) <%= moment().format('YYYY') %> Hyper Functor

      This source code is licensed under the MIT license found in the
      LICENSE file in the root directory of this source tree.
      `.trim(),
      }),
    ],
  },
];

// eslint-disable-next-line import/no-default-export
export default rollupConfig;
