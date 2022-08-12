module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "blacklist": null, // DEPRECATED
      "whitelist": null, // DEPRECATED
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }],
    [
      'module-resolver',
      {
        alias: {
          '@__mocks__': './src/__mocks__',
          '~@types': './src/@types',
          '~assets/icons': './src/assets/icons',
          '~assets/images': './src/assets/images',
          '~constants': './src/constants',
          '~contexts': './src/contexts',
          '~components': './src/components',
          '~config': './src/config',
          '~hooks': './src/hooks',
          '~routes': './src/routes',
          '~screens': './src/screens',
          '~types': './src/types',
          '~services': './src/services',
          '~utils': './src/utils',
        },
      },
    ],
  ],
};
