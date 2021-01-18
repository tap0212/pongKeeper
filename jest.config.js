module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/App.js', '!src/index.js'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@src(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/build-utils/testing/test-bundler.js'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: []
};
