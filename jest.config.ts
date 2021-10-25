import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    // no need for rich SVGs in test and saves us from having to transform with babel
    '[@~./a-zA-Z0-9$_-]+\\.svg(.*)': '<rootDir>/src/mocks/svgMock.tsx',
    // handle aliases
    '^~/(.*)': '<rootDir>/$1',
    '^@/(.*)': '<rootDir>/src/$1',
    // vite public folder
    '^/(.*)': '<rootDir>/public/$1',
  },
};

export default config;
