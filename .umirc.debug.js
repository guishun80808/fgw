export default {
  proxy: {
    '/api': {
      target: 'http://100.100.100.135:8084/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/app/api' },
    },
  },
};
