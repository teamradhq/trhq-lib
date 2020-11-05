module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.spec.[jt]s?(x)',
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "#/(.*)$": "<rootDir>/test/$1",
  },

};
