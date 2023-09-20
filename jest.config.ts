export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__test__/__mocks__/fileMock.ts',
      '^.+\\.(css|less|scss|sass)$': '<rootDir>/src/__test__/__mocks__/styleMock.ts',
      setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTest.ts"],
  },
}