# PongKeeper
![Pong Keeper CI](https://github.com/tap0212/pongKeeper/workflows/Pong%20Keeper%20CI/badge.svg)
![Pong Keeper CD](https://github.com/tap0212/pongKeeper/workflows/Pong%20Keeper%20CD/badge.svg)

### Visit the deployed version [here](https://tap0212.github.io/pongKeeper)
![](https://github.com/tap0212/pongKeeper/blob/master/screen1.png)
![](https://github.com/tap0212/pongKeeper/blob/master/screen2.png)

### To run the application locally for the first time use following command
- `yarn && yarn start`
## Global state management using reduxSauce

- Global state management using [Redux Sauce](https://github.com/infinitered/reduxsauce)
- Computing and getting state from the redux store using [Reselect](https://github.com/reduxjs/reselect)

## Styling using styled-components

- Styling components using [Styled Components](https://styled-components.com)

  Take a look at the following files

  - [src/components/CustomButton/index.js](src/components/CustomButton/index.js)
  - [src/containers/Keeper/index.js](src/containers/Keeper/index.js)

## Using antd as the component library

- Reusing components from [Ant design](https://ant.design)

  Take a look at the following file

  - [src/containers/Keeper/index.js](src/containers/Keeper/index.js)

## Bundling using Webpack

- Using and configuring webpack to bundle the React application.

## Analyzing the bundle size using webpack-bundle-analyzer

- The size of the bundle is analyzed using the webpack-bundle-analyzer to make sure that the bundle is lean and optimized.

## Implementing CI/CD pipelines using Github Actions

- CI/CD using Github Actions.
  The CI pipeline has the following phases
  - Checkout
  - Install dependencies
  - Lint
  - Test
  - Build

  The CD pipeline has the following phases
  - Checkout
  - Install dependencies
  - Build
  - Deploy

  Take a look at the following files
  - [.github/workflows/ci.yml](.github/workflows/ci.yml)
  - [.github/workflows/cd.yml](.github/workflows/cd.yml)

## Testing using @testing-library/react

- Testing is done using the @testing-library/react.

  Take a look at the following files
  - [jest.config.js](jest.config.js)
  - [jest.setup.js](jest.setup.js)

### Chunkify and Lazy loading

Take a look at the following files
- [src/containers/Keeper/Loadable.js](src/containers/Keeper/Loadable.js)
- [src/utils/loadable.js](src/utils/loadable.js)
