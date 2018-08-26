const promise_paths = require('./scripts/getAllHTMLPath');

// module.exports = {

//   exportPathMap: function () {
//     return {
//       '/': { page: '/' },
//       '/th/introduction-to-open-time-series-database-th/': { page: '/' , query: { path: "/th/introduction-to-open-time-series-database-th/" } },
//       '/about/': { page: '/' , query: { path: "/about/"}}
//     }
//   }
// };

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

exports.exportPathMap = () => buildPagePaths(promise_paths);
