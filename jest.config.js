module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios",
  ],
  setupFiles: [
    "<rootDir>/setupTest.ts"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ],

}
