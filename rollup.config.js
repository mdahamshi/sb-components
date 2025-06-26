import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/components/Dropdown/Dropdown.js",
    output: {
      file: "dist/Dropdown/index.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: "Dropdown.css",
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: "src/components/Carousel/Carousel.js",
    output: {
      file: "dist/Carousel/index.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: "Carousel.css",
        minimize: true,
      }),
      terser(),
    ],
  },
];
