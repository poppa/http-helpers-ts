// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve, join } = require('path')

module.exports = {
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: true,
  roots: ['src'],
  testRegex: '(\\.|/)(test|spec)\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '(\\.|/)(test|spec)\\.d.ts$'],
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: resolve(join(__dirname, './tsconfig.test.json')),
      packageJson: resolve('./package.json'),
      diagnostics: true,
    },
  },
  testMatch: null,
}
