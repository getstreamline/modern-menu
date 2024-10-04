import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/ModernMenu.js',
  output: {
    file: './dist/modern-menu.js',
    format: 'umd',
    name: 'ModernMenu',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      extensions: ['.js'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: '11',
            },
            modules: false,
            loose: true,
          },
        ],
      ],
    }),
    terser(),
  ],
};
