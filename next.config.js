const withSASS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
module.exports = withImages(
  withSASS(
    withCSS(
      withBundleAnalyzer({
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html'
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html'
          }
        }
      })
    )
  )
);
