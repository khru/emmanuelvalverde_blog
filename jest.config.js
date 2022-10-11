/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "src",
});

const customJestConfig = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  // setupFileAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
