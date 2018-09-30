export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [/models\//, /data\//, /components\//],
        },
        polyfills: ['ie9'],
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
        },
        hardSource: false,
        pwa: true,
        hd: false,
        fastClick: true,
        title: '湖北省一带一路公共服务平台',
      },
    ],
  ],
  // base:'/dist/',
  history: 'hash',
};
