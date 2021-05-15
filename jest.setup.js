// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mock i18next
// import "./i18n";

// add this to load font awesome icons for tests.
// import registerFaIcons from "./assets/RegisterFaIcons.js";
// registerFaIcons();

// Make development environment variables available in tests
require("dotenv").config({ path: "./.env.development" });

// Mock scrollTo function
window.scrollTo = jest.fn();

// Stub console.error and console.warn so that any React warnings need to be fixed in order for our test suite to pass
// console.error = (err) => {
//   throw new Error(err);
// };
// console.warn = (warning) => {
//   throw new Error(warning);
// };
