// ~~/rollup.config.js

// imports
const typescript = require('@rollup/plugin-typescript')

let plugins = [typescript()]
module.exports = {
  input: {
    thokk: 'src/thokk.ts',
  },
  output: {
    dir: 'dist',
    exports: 'named',
    format: 'es',
    sourcemap: true,
  },
  plugins,
  type: 'module',
}
