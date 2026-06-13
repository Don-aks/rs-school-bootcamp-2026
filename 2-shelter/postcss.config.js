const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    autoprefixer: {
      grid: true,
    },

    ...(isProd && {
      'postcss-pxtorem': {
        rootValue: 16,
        unitPrecision: 5,
        propList: ['*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: true,
        minPixelValue: 0,
      },
    }),
  },
};
