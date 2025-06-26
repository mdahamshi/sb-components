import { resolve } from "path";

export default {
  root: "./dev", // root of your project
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src"),
    },
  },
};
