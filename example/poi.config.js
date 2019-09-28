module.exports = {
  entry: 'example/index.js',
  output: {
    dir: 'example/dist',
    publicUrl: process.env.NODE_ENV === 'development' ? '/' : '/vue-octicons'
  },
  babel: {
    jsx: 'vue'
  }
};
