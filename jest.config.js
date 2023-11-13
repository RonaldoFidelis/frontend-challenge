/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/path-to-mock-file.js"
  },
  setupFilesAfterEnv: ["jest-styled-components"]
};