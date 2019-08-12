![image](https://github.com/arjdev69/kinvoapp/blob/master/KinvoApp/src/icons/logo.svg)

# KinvoApp &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-BSD-red.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> KinvoApp Test Mobile

A app for get financial products of an api.

### FIRST READ ALL!!!

Click in image for watch video...

[![Watch the video](https://github.com/arjdev69/kinvoapp/blob/master/KinvoApp/src/icons/kinvoScreenShot.jpeg)](https://youtu.be/pTopqPiiINA)

## Installing / Getting started

```shell
- Enviroment Android SDK working properly
- git clone this repository or git clone https://github.com/arjdev69/kinvoapp.git
- cd repository/kinvoapp/KinvoApp
- npm install
- react-native link -> (RN < 0.60)
- npm start
- react-native run-android
```

### Libs necessary links
```
- react-native-config -> Important follow step lib on github. LINK: https://github.com/luggit/react-native-config
- react-native-gesture-handler
- react-native-reanimated
- react-native-tab-view
```

### if you have not Android Emulator

```
- Connect usb cabe in smartphone and in your PC.

- Open Terminal in your project directory
- /home/android/platform-tools/./adb reverse tcp:8081 tcp:8081
- react-native run-android

# Changes in Code. Use: 
- /home/android/platform-tools/./adb shell input keyevent 46 46
```

## Developing

### Built With
* NodeJS LTS
* React Native 0.60

### Setting up Dev
##### Dependencie
* react-native-config

Create the file *.env* in your root directory project.

Example File: 

```shell
REACT_APP_API_URL=https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io

REACT_APP_API_KEY=AIzasfghBdscVsddZsBv1EwvZsdscC2G8DpvzC7H83Fw

...
REACT_APP...`like this successively`
```

### Deploying / Publishing

Follow steps -> https://facebook.github.io/react-native/docs/signed-apk-android

or use Android Studio.

## Tests

Running Tests

```shell
npm run test
```

## Api Reference

Following steps *Setting up Dev*

### API:  https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io/getProducts 

## Licensing

Lincense BSD

https://pt.wikipedia.org/wiki/Licen%C3%A7a_BSD
