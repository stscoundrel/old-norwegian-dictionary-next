const nextJest = require('next/jest')

const createJestConfig = nextJest({ __dirname })

const customJestConfig = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!.next/**',
    '!**/*.tsx.snap',
    '!**/*_app.tsx',
    '!**/*_document.tsx',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['src', 'node_modules'],
  setupFiles: [
    '<rootDir>/setupTests.js',
  ],
}

module.exports = createJestConfig(customJestConfig)
