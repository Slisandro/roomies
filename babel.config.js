module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for stream-chat
      'react-native-reanimated/plugin', 
    ],
  };
};
