'use strict';

var path   = require('path')
  , yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({


  initializing: function () {
    this.props = this.config.getAll();
  },

  writing: function () {
        
    this.template(path.join('build', 'build.xml'), path.join(this.props.serviceFeature, 'build', 'build.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g });
    this.template(path.join('build', 'project.properties'), path.join(this.props.serviceFeature, 'build', 'project.properties'), null, { 'interpolate': /<%=([\s\S]+?)%>/g});
    this.template('pom.xml', path.join(this.props.serviceFeature, 'pom.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g});
    
    this.template(path.join('META-INF/spring', 'feature.xml'), path.join(this.props.serviceFeature,'META-INF/spring', 'feature.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g });
    this.template(path.join('META-INF', 'MANIFEST.INF'), path.join(this.props.serviceFeature, 'META-INF', 'MANIFEST.MF'));

  },

  end: function(){
    this.config.set(this.props)
  }
});

