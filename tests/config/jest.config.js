module.exports = {
  rootDir: '../../',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build-*/',
    '<rootDir>/out/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/config/setupTests.js',
  ],
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!**/*.{stories,story}*',
    '!**/build-*/**/*',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/tests/coverage/',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build-*/',
    '<rootDir>/out/',
    '<rootDir>/.storybook/',
    '<rootDir>stories/',
  ],
  moduleNameMapper: {
    '\\.(s?css|sass|less)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpe?g)$': '<rootDir>/tests/__mocks__/fileMock.js',
  }
}