/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'src/**/*.spec.js', type: 'module' }
      ],
      esm: {
        nodeResolve: true,
        babel: true,
        coverageExclude: ['src/**/*.spec.js', 'src/**/*.stories.js']
      },
      // you can overwrite/extend the config further
      frameworks: ['sinon-chai']
    }),
  );
  return config;
};
