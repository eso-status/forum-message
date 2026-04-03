import { defineConfig } from 'jest';

export default defineConfig({
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  testRegex: '(.*\\.e2e-spec\\.ts|.*\\.spec\\.ts)$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>'],
});
