module.exports = (env = { MODE: 'production' }) => {
  const config = {
    mode: env.MODE,
    resolve: {
      extensions: ['.js'],
      modules: [
        'node_modules',
        'src',
      ],
      alias: {
        '@': './src',
        '#': './test',
      },
    },
  };

  return config;
};
