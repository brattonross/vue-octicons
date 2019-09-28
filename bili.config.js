/** @type {import('bili').Config} */
module.exports = {
  input: './dist/index.js',
  output: {
    dir: '.',
    fileName: 'index.js'
  },
  plugins: {
    vue: true
  }
};
