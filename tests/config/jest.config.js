const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // relative to package.json
});

const customJestConfig = {
  rootDir: '../../', // relative to tests/config
  moduleDirectories: [
    '<rootDir>/node_modules/',
    '<rootDir>/'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build-*/',
    '<rootDir>/out/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/config/jest.setup.js',
  ],
  clearMocks: true,
  collectCoverageFrom: [
    '**components/**/*.{ts,tsx,js,jsx}',
  ],
  coverageDirectory: '<rootDir>/tests/coverage/',
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig);
