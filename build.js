var
    //configurations
    verbose     = true, // set true for metalsmith file and meta content logging
    dev = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'),
    config      = require('./config.json'),
    pkg = require('./package.json'),

    //modules
    metalsmith  = require('metalsmith'),
    rootPath    = require('metalsmith-rootpath'),
    metadata    = require('metalsmith-metadata'),
    define      = require('metalsmith-define'),
    json        = require('metalsmith-json'),
    request     = require('metalsmith-request'),
    markdown    = require('metalsmith-markdown'),
    publish     = require('metalsmith-publish'),
    wordcount   = require("metalsmith-word-count"),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    inplace     = require('metalsmith-in-place'),
    layouts     = require('metalsmith-layouts'),
    sitemap     = require('metalsmith-mapsite'),
    rssfeed     = require('metalsmith-feed'),
    assets      = require('metalsmith-assets'),
    moments     = require('metalsmith-moment'),

    _config     = {
      site: config.site,
      version: pkg.version,
      dir: {
        base: __dirname + '/',
        source: config.dir.source,
        destination: config.dir.destination,
        assets: config.template.directory + config.template.theme + config.template.assets
      },
      template: {
        engine: config.template.engine,
        directory: config.template.directory + config.template.theme,
        partials: config.template.partials,
        layouts: config.template.layouts,
        default: config.template.default
      },
    };
console.log('========================================================================');
console.log('Metalsmith ');
console.log('========================================================================');
metalsmith(_config.dir.base)
  .source(_config.dir.source)
  .destination(_config.dir.destination)
  //.use(json({address: './data/contact_info.json'}))
  //.use(console.log(address))
  .metadata({
    _config,
    address: './data/contact_info.json'
  })
  //.use(rootPath())
  .use(assets({
    "source": _config.dir.assets
  }))
  .use(inplace(_config.template))
  .use(layouts(_config.template))
  .use(markdown()) // convert markdown
  .use(permalinks({ // generate permalinks
    pattern: ':page/:title'
  }))
  .build(function(err) {
    if (err) throw err;
  });
