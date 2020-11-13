module.exports = {
  // Simula a DOM
  testEnvironment: 'jsdom',
  // Ignorar essas pastas
  testPathsIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']

}
