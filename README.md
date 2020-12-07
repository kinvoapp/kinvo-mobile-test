# Kinvo Mobile App Test

My attempt to build a mobile app with React Native using Kinvo instructions and designs.

<div align="center" >
<img src="https://user-images.githubusercontent.com/49761746/101297699-19952d00-3809-11eb-9dd4-1a71409e8858.gif" width="30%">
<img src="https://user-images.githubusercontent.com/49761746/101297711-26198580-3809-11eb-85a3-290ecd452aaf.gif" width="30%">
<img src="https://user-images.githubusercontent.com/49761746/101297877-e901c300-3809-11eb-8ad1-7ddecfcfbc23.gif" width="30%">
</div>


## Installation

Clone the repository, then:

install the dependencies:

```bash
yarn
```

Install iOS pods (If you're going to run on a macOS):

```bash
cd ios
```

```bash
pod install
```

Run the app:

```bash
yarn android
```
or 

```bash
yarn ios 
```

## Developing

### Built with
- React Native CLI
- Redux (using Rematch framework)
- Typescript
- React Navigation v5
- Eslint
- Prettier

### Prerequisites

To run this project, you will need the following packages installed:

- [NodeJS v10.16 or higher](https://nodejs.org/en/)
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) or [Android Studio](https:/P/developer.android.com/studio)
- [Cocoapods](https://cocoapods.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Comments
- I couldn't use the API requests or use JSON.parse() on the data, so I end it up using mock data.
- Because I use mock data, I wasn't able to use the `request error` screen.
- The design for the pension screen shows a `novo` label, but this status isn't coming from the response on `/pension` API endpoint.
- The response from /stocks has a typo on `ticket`.

### Problems?

You can contact [me](https://www.linkedin.com/in/enrickdaltro/) or you can also check [React Native environment setup](https://reactnative.dev/docs/environment-setup) page.

Made with ❤️ by [Enrick Daltro](https://www.linkedin.com/in/enrickdaltro/) 🤙
