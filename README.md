# Kinvo React Native App &middot; [![npm](https://img.shields.io/badge/npm-6.14.9-blue)](https://www.npmjs.com/package/npm)

This is a technical challenge for a job opportunity at Kinvo that consists in developing an mobile app from a Adobe XD [propotype](https://xd.adobe.com/view/4701a220-a119-482a-89a5-4d110332e25f-1252/screen/59ecf5f8-d6a9-47e9-a14a-d890567d5b3d/specs/). The app was created in React Native and I chose [Expo CLI](https://docs.expo.io/get-started/installation/) to make development easier.

## __Installing / Getting started__

Assuming that you have [Node](https://nodejs.org/en/download/) 12 LTS or greater installed, you can use npm to install the Expo CLI command line utility:

```shell
npm install -g expo-cli
```

Navigate to the react native project directory

```shell
cd kinvo
```

Install the project dependencies

```shell
npm install
```

Start the development server

```shell
expo start
```

## __Opening the app on your phone/tablet__

🍎 On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.

🤖 On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.

If you are using an iOS simulator or Android emulator, you may find the following Expo CLI keyboard shortcuts to be useful:

- Pressing `i` will open in an iOS simulator.
- Pressing `a` will open in an Android emulator or connected device.

## __Developing__

### __Built With__

__Expo__<br>
Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

### __Deploying / Publishing__<br>
Run expo `build:android` or `expo build:ios`. <br>

__Wait for it to finish build__

When one of the building machines is free, it'll start building your app. A url will be printed that you can visit  to watch your build progress and access the build logs. When it's done, you'll see the url to your app file - an .apk, .aab (both Android), or .ipa (iOS) file. Copy and paste the link into your browser to download the file.

__Android__

- __To run it on your Android emulator__, first build your project with the apk flag by running `expo build:android -t apk`, and you can drag and drop the .apk into the emulator.
- __To run it on your Android device__, make sure you have the Android platform tools installed along with adb, then just run `adb install app-filename.apk` with USB debugging enabled on your device and the device plugged in.