'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is the module name'
    }, {
      type: 'input',
      name: 'pageName',
      message: 'What is the page name'
    }, {
      type: 'list',
      name: 'pageType',
      message: 'What is the page type',
      choices: [{
        name: 'Blank Page',
        value: 0
      }, {
        name: 'List Page',
        value: 1
      }, {
        name: 'Detail Page',
        value: 2
      }]
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var pagePath = '';

    switch (this.props.pageType) {
      case 1:
        pagePath = 'list-page';
        break;
      case 2:
        pagePath = 'detail-page';
        break;
      default:
        pagePath = 'blank-page';
        break;
    }

    this.fs.copyTpl(
      this.templatePath(pagePath + '.html'),
      this.destinationPath('app/' + this.props.moduleName + '/' + this.props.pageName + '.html'), {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath(pagePath + '.js'),
      this.destinationPath('app/scripts/' + this.props.moduleName + '/' + this.props.pageName + '.js'), {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath(pagePath + '.css'),
      this.destinationPath('app/styles/' + this.props.moduleName + '/' + this.props.pageName + '.css'), {
        moduleName: this.props.moduleName,
        pageName: this.props.pageName
      }
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
