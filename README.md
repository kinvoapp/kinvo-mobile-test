<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# Kinvo test Project - Kinvo Kinho &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> A sample project with react-native and hooks, built for android phones. It showcases Franklin Silva's expertize on hybrid development techniques.


## Installing / Getting started

First we assume that you have the react-native cli envioroment installed. If not, please click in the following link first:
https://reactnative.dev/docs/getting-started

To build the app you should run the following commands in order:
```yarn``` (To install all dependencies. I strongly suggests you to install Yarn from https://classic.yarnpkg.com/en/docs/install/#windows-stable)
```npx react-native run-android```

## Developing

### Built With
react v17.0.1
react-native v0.64.0
axios v0.19
redux v4.0
react-navigation v4.0.10

### Prerequisites
Set up can be done by following the react-native official website.
https://reactnative.dev/docs/environment-setup

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/FranklinSilva/kinvo-mobile-test
cd kinvo-mobile-test/stocksManager
yarn
npx react-native run-android
```

### Deploying / Publishing
In order to deply a new release for android, you should use the following command:

```shell
cd android && ./gradlew assembleRelease
```

## Tests

Snapshot tests are available using jest. Run simply by using the following command

```shell
yarn test
```