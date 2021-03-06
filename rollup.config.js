import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'es' },
    external: ['big.js', 'toformat'],
    plugins: [typescript({ useTsconfigDeclarationDir: true })],
  },
  {
    input: 'src/index.ts',
    output: { file: pkg.main, format: 'cjs' },
    external: ['big.js', 'toformat'],
    plugins: [typescript()],
  },
];
