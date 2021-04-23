// const {createDefaultConfig} = require('@open-wc/testing-karma');
// const merge = require('deepmerge');

module.exports = function (config) {
  config.set({
    // merge(createDefaultConfig(config), {
    basePath: "",
    frameworks: ["jasmine", "karma-typescript"],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    files: ["src/**/*.ts"],
    exclude: [],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        module: "commonjs",
      },
      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()],
      },
    },
    preprocessors: {
      "**/*.ts": "karma-typescript",
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeCustom"],
    customLaunchers: {
      ChromeCustom: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    singleRun: true,
  });
  return config;
};
