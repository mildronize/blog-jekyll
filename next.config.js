const promise_paths = require('./scripts/getAllHTMLPath');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const withSass = require('@zeit/next-sass')

const getParams = (page, path) => ({
  page: `${page}`,
  query: { path: `${path}` },
});

const buildPagePaths = (
  blogPosts,
  defaultRoutes = {
    '/': { page: '/' },
  }
) =>
  blogPosts.then(paths =>
    paths.reduce((routes, path) => {
      const postRoutes = Object.assign(routes, {
        [ path ]: getParams('/', path),
      });
      // console.log(postRoutes);
      return postRoutes;
    }, defaultRoutes)
  );

module.exports = withSass({
  exportPathMap : () => buildPagePaths(promise_paths),
  webpack: config => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config
  },
  sassLoaderOptions: {
    includePaths: ["./node_modules", "./styles"]
  }
});

// module.exports = {

//   exportPathMap: function () {
//     return {
//       '/': { page: '/' },
//       '/th/introduction-to-open-time-series-database-th/': { page: '/' , query: { path: "/th/introduction-to-open-time-series-database-th/" } },
//       '/about/': { page: '/' , query: { path: "/about/"}}
//     }
//   }
// };
