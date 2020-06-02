const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  async exportPathMap() {
    // 配置输出的html路径
    return {
      '/': { page: '/' },
      '/picture': { page: '/picture' },
      '/live': { page: '/live/[id]' },

      // '/home': { page: '/index' },
    };
  },
  assetPrefix: isProd ? '.' : '',
};
