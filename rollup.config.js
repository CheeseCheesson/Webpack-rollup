import styles from "rollup-plugin-styles";
import image from "rollup-plugin-img";
import { babel } from "@rollup/plugin-babel";
import livereload from "rollup-plugin-livereload";
import serve from 'rollup-plugin-serve'

export default {
  input: "./src/index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    styles(),
    image({
      limit: 1000000,
    }),
    babel({
      babelHelpers: "bundled",
    }),
    livereload(),
    serve({
      open: true,
      contentBase: './',
      port: 1010 
    }),
    livereload(),
  ],
};
