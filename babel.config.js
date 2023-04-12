module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@fontFamily': './src/assets/fonts/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin', //let reanimated plugin at last
  ],
};
