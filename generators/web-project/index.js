'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the praiseworthy ' + chalk.red('generator-wdf') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('app')
    );
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('_editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
  },

  install: function() {
    this.installDependencies();
  }
});
