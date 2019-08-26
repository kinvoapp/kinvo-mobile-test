![Logo of the project](./images/logo.sample.png)

# Name of the project &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

A test for Kinvo App

## Installing / Getting started

Setup yout Enviroment Android SDK to works properly.
https://codeburst.io/setting-up-development-environment-using-react-native-on-windows-dd240e69f776.

```shell
- git clone this repository or git clone https://github.com/arjdev69/kinvoapp.git
- cd repository/kinvo_app
- yarn install
- react-native link (if you are using React Native < 0.6)
- react-native run-android
```

Remeber you need an Android emulator or a smartphone with Android to run.

## Developing

### Built With
- React Native
- Node download link: https://nodejs.org/en/download/

### External libs
- react-native-vector-icons
- react-native-firebase
- @react-native-community/viewpager install link: https://github.com/react-native-community/react-native-viewpager


### Deploying / Publishing

To generate a signed-apk for android use this link
https://facebook.github.io/react-native/docs/signed-apk-android

Or, use Android Studio:
https://developer.android.com/studio/publish

## Tests

Running Tests

```shell
yarn test
```
Only has render tests. I don't experiences with tests :(.

## Api Reference

The initial state of the DB was based on:
https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io

Firebase Realtime Database was used.
*Beacuse the app can put new values on database.*

## Licensing

Lincense BSD

Free to make changes and use for any reason.