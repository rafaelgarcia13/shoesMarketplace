module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@fontFamily': './src/assets/fonts/index.ts',
          '@svg': './src/assets/images/svg/index.ts',
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin', //let reanimated plugin at last
  ],
};
