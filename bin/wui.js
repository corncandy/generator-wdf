#!/usr/bin/env node

var chalk = require('chalk');
var yeoman = require('yeoman-environment');
var yosay = require('yosay');

function printWelcome() {
  console.log(yosay(
    'Welcome to the awesome ' + chalk.red('WUI Framework') + ' generator!'
  ));
}

function printUsage() {
  console.log(chalk.green.bold('WDF-Web:'));
  console.log('   ', chalk.yellow('wui web'), '\t\t', 'Create wdf-web project.');
  console.log('   ', chalk.yellow('wui web:page'), '\t', 'Create wdf-web page.');
  console.log();
  console.log(chalk.green.bold('WDF-Mobile:'));
  console.log('   ', chalk.yellow('wui mobile'), '\t\t', 'Create wdf-mobile project.');
  console.log('   ', chalk.yellow('wui mobile:page'), '\t', 'Create wdf-mobile page.');
  console.log();
  console.log(chalk.green.bold('WDF-WebApp:'));
  console.log('   ', chalk.yellow('wui webapp'), '\t\t', 'Create wdf-webapp project.');
  console.log('   ', chalk.yellow('wui webapp:page'), '\t', 'Create wdf-webapp page.');
  console.log();
  console.log(chalk.green.bold('WDF-H5App:'));
  console.log('   ', chalk.yellow('wui h5app'), '\t\t', 'Create wdf-h5app project.');
  console.log('   ', chalk.yellow('wui h5app:page'), '\t', 'Create wdf-h5app page.');
}

function runCommand() {
  env.lookup(function () {
    // env.run('wdf:web-page');
  });
}

printWelcome();

if (process.argv.length < 3) {
  printUsage();
} else {
  var command = process.argv[2];
  var env = yeoman.createEnv();
  var generator = null;

  switch (command) {
    case 'web':
      generator = 'wdf:web-project';
      break;
    case 'web:page':
      generator = 'wdf:web-page';
      break;
    default:
      break;
  }

  if (generator) {
    env.lookup(function () {
      env.run(generator);
    });
  } else {
    console.log(chalk.red('Sorry, this module is under construction.'))
  }
}
