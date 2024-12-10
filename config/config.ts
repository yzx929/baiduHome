import { defineConfig } from "umi";
//import routes from "./routes";
export default defineConfig({
  //routes,
  //externals:{},
  npmClient: "npm",
  cssLoader: {
    modules: true,
  },
});
