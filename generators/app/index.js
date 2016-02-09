'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay'),
    validator = require('validator'),
    superb    = require('superb'),
    superheroes  = require('superheroes'),
    path      = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Akana Platform Service') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'title',
      message: 'Name your project',
      default: this.config.get('title'),
      validate: function (input) {
        return input ? true : false;
      }
    }, {
      type: 'input',
      name: 'description',
      message: 'What\'s your project about? (optional)',
      default: this.config.get('description') || null
    }, {
      type: 'input',
       name: 'author',
      message: 'What\'s your name?',
      default: this.config.get('author'),
      validate: function (input) {
        return input ? true : false;
      }
    }, {
      type: 'input',
      name: 'email',
      message: 'What\'s your email?',
      default: this.config.get('email'),
      validate: function (input) {
        return validator.isEmail(input);
      }
    }, {
      type: 'input',
      name: 'namespace',
      message: 'Name your Java package namespace (e.g. com.akana.service.transform)',
      default: this.config.get('namespace')
    },{
      type: 'input',
      name: 'component',
      message: 'Name your Java class prefix (TitleCase - Alphanumeric)',
      default: this.config.get('component'),
      validate: function (input) {
        return validator.isAlphanumeric(input);
      }
    },{
      type: 'input',
      name: 'bundleVersion',
      message: 'Service Version',
      default: this.config.get('bundleVersion') || '1.0.0',
      validate: function (input) {
        return input ? true : false;
      }
    },{
      type: 'input',
      name: 'akanaPlatformVersion',
      message: 'Akana Platform Release Version',
      default: this.config.get('akanaPlatformVersion') || '8.1.0',
      validate: function (input) {
        return input ? true : false;
      }
    },{
      type: 'input',
      name: 'gatewayBaseVersion',
      message: 'API Gateway Release Version',
      default: this.config.get('gatewayBaseVersion') || '8.0.0',
      validate: function (input) {
        return input ? true : false;
      }
    },{
      type: 'input',
      name: 'gatewayUpdateVersion',
      message: 'API Gateway Cumulative Update Version',
      default: this.config.get('gatewayUpdateVersion') || '8.0.1',
      validate: function (input) {
        return input ? true : false;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.props.service = this.props.namespace;
      this.props.serviceFeature = this.props.namespace + '.feature';
      this.config.set(this.props);
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('pom.xml', 'pom.xml', null, { 'interpolate': /<%=([\s\S]+?)%>/g});
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    readme: function () {
      this.template('README.md');
    },

    //build: function(){
    //  this.composeWith('akana-service:build-repository', {}, {
    //    link: 'strong'
    //  }) 
    //},

    service: function(){
      this.composeWith('akana-service:service-runtime', {}, {
        link: 'strong'
      })
    }    

    //feature: function(){
    //  this.composeWith('akana-service:service-feature', {}, {
    //    link: 'strong'
    //  })
    //}

  },
  
  install: function () {
    //this.installDependencies();
  },

  end: function () {
    this.config.save();
    this.log(yosay(
      'Alright, ' + chalk.red(superheroes.random()) +  ' you are all set!'
    ));
  }
});
