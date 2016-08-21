'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the first-rate ' + chalk.red('WUI framework') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is the module name'
    }, {
      type: 'input',
      name: 'pageName',
      message: 'What is the page name'
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('page-template.html'),
      this.destinationPath('app/' + this.props.moduleName + '/' + this.props.pageName + '.html'),
      {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('page-template.js'),
      this.destinationPath('app/scripts/' + this.props.moduleName + '/' + this.props.pageName + '.js'),
      {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('page-template.css'),
      this.destinationPath('app/styles/' + this.props.moduleName + '/' + this.props.pageName + '.css'),
      {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
  },

  install: function() {
    // this.installDependencies();
  }
});
