export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',},
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/tests/unittest/**/*.test.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy', // Mock các file CSS
    },
    setupFiles: ['./jest.setup.js'],
};
