import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'esm', sourcemap: true },
    {
      name: 'HealthwiseStructuredContentUI',
      file: 'build/healthwise-structured-content-ui.min.js',
      format: 'iife',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve(),
    external(),
    babel({
      rootMode: 'upward-optional',
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
    }),
    terser(),
  ],
}
