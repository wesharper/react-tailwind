# Getting Started

## Installing Dependencies

- We use [nvm](<[https://](https://github.com/nvm-sh/nvm)>) to manage node and npm versioning. Please make sure it's installed before proceeding.
- From the package root, run `nvm use`. If you don't currently have the correct node version installed, follow the instructions in the terminal.
- Once the correct version of node/npm are installed, run `npm i`.

## Running the Application

1. Start firebase emulators using `npm run firebase:emulate`.
   - If you'd like to save test data that will persist after closing the emulator, use `npm run firebase:emulate:save`. This is convenient for seeding data, such as saving additional test user accounts for use in integration testing.
1. Start the application using `npm run start`.

## Testing

We use react-testing-library and mock service worker for our tests. We typically try to stay true to the react-testing-library philosophy and test requests made to the back-end rather than mocking internal dependencies.

Be sure to read through the [react-testing-library docs](https://testing-library.com/docs/react-testing-library/intro/) and peruse this article about [common mistakes using the library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library).

- MSW mocks can be found in `src/mocks`
- Tests can be found next to their associated components
- Run tests using `npm test`, but **_be sure to start the firebase emulators first_**
