const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  coverageReporters: ["html"],
  coverageDirectory: "./coverage",
};

module.exports = createJestConfig(customJestConfig);
