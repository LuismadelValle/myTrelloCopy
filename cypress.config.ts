import { defineConfig } from "cypress";

// module.exports = defineConfig({
//   chromeWebSecurity: false,
//   retries: 2,
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   defaultCommandTimeout: 10000,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       return require("./cypress/plugins/index.js")(on, config);
//     },
//     baseUrl: "http://localhost:8080",
//     experimentalSessionAndOrigin: true,
//   },
// });

export default defineConfig({
  chromeWebSecurity: false,
  retries: 2,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:8080",
    experimentalSessionAndOrigin: true,
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
