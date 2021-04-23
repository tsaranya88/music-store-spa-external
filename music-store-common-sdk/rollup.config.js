import multiInput from 'rollup-plugin-multi-input';

const individualComponentConfig = {
  input: ['./src/**/*.js', '!src/**/*.spec.js', '!src/**/*.stories.js', '!src/components/**/*.style.js'],
  output: [
    {
      format: 'esm',
      dir: 'dist/music-store-common-sdk',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      assetFileNames: '[name][extname]',
    }
  ],
  plugins: [multiInput()],
};

const configs = [individualComponentConfig];

export default configs;
