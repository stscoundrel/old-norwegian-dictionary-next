import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest()

const customJestConfig: Config = {
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
    '<rootDir>/setupTests.ts',
  ],
}

export default createJestConfig(customJestConfig)
