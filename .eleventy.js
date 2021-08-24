// 11ty configuration
const
  dev = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = config => {


  config.addPassthroughCopy({ "./src/images/favicon": "/" });
  /* --- WATCH FOLDERS --- */

  // pick up contents and add it to output directory
  config.addPassthroughCopy("./src/images/")
  config.addPassthroughCopy("./src/css/")

  // Trigger build as changes are made
  config.addWatchTarget("./src/css/")
  config.addWatchTarget("./src/images/")

  // config.addPassthroughCopy({ "./src/images/favicon/": "/" })
  /* --- PLUGINS --- */

  // navigation
  config.addPlugin( require('@11ty/eleventy-navigation') );


  /* --- FILTERS --- */

  // format dates
  const dateformat = require('./lib/filters/dateformat');
  config.addFilter('datefriendly', dateformat.friendly);
  config.addFilter('dateymd', dateformat.ymd);

  // format word count and reading time
  config.addFilter('readtime', require('./lib/filters/readtime'));


  /* --- SHORTCODES --- */

  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));


  /* --- CUSTOM COLLECTIONS --- */

  // post collection (in src/articles)
  config.addCollection('post', collection =>

    collection
      .getFilteredByGlob('./src/articles/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))

  );

  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'build'
    }

  };
};
