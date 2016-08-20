#!/usr/bin/env node

var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.lookup(function () {
  env.run('wdf:web');
});
