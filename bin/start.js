#!/usr/bin/env node

var spawn = require('cross-spawn');

const result = spawn.sync(
      'node',
      [].concat(require.resolve('./run.js')),{ stdio: 'inherit' });
console.log(result);