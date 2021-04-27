module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
        '/node_modules/(?!native-base)/'
    ],    
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/__mocks__/fileMock.ts',
        '^@/(.*)$': '<rootDir>/$1',
    },
    moduleNameMapper: { '<rootDir>/assets/+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub', },
  };