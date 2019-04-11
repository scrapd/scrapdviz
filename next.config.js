const withCSS = require('@zeit/next-css');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => { }
}

// module.exports = withCSS()
module.exports = withCSS({
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          },
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions,
        }),
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'ScrAPDviz',
          short_name: 'ScrAPDviz',
          description: 'Visualize Austin traffic fatalities from another angle.',
          background_color: '#ffffff',
          theme_color: '#042BA8',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'ScrAPDviz',
            'apple-mobile-web-app-status-bar-style': '#042BA8',
          },
          icons: [
            {
              src: path.resolve('static/favicon.ico'),
              sizes: [128],
              destination: '/static',
            },
          ],
          includeDirectory: true,
          publicPath: '..',
        })
      );
    }

    return config;
  },
});
