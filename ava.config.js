export default {
  extensions: [
    'ts',
    'tsx'
  ],
  files: [
    'test/**/*.test.ts?(x)'
  ],
  require: [
    'ignore-styles',
    'esm',
    'ts-node/register',
    'tsconfig-paths/register',
    'global-jsdom/register'
  ]
}
