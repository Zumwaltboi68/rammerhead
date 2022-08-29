#!/usr/bin/env node
'use strict';

// hack to catch any possible exceptions!
// this package isn't a cli tool, the cli being installed is just for convenience
process.chdir(__dirname);

require('./src/server.js');
