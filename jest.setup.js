/* eslint-disable no-console */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// Stub console.error and console.warn so that any React warnings
// need to be fixed in order for our test suite to pass
console.error = (err) => {
  throw new Error(err);
};
console.warn = (warning) => {
  throw new Error(warning);
};

// // Make development environment variables available in tests
// require('dotenv').config({ path: './.env.development' });

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
