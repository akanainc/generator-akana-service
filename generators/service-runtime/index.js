'use strict';

var path   = require('path')
  , yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({


  initializing: function () {
    this.props = this.config.getAll();
  },

  writing: function () {
    var servicePath = (this.props.service || '').replace(/\./g, '/');
    
    this.props.servicePath = servicePath;
    
    this.template(path.join('src/main/java','Service.java'), path.join(this.props.service, 'src/main/java', servicePath, this.props.component +'Service.java'));
    
    this.template(path.join('build', 'build.xml'), path.join(this.props.service, 'build', 'build.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g });
    this.template(path.join('build', 'project.properties'), path.join(this.props.service, 'build', 'project.properties'), null, { 'interpolate': /<%=([\s\S]+?)%>/g });
    this.template('pom.xml', path.join(this.props.service, 'pom.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g});
    
    this.template(path.join('META-INF/spring', 'service-osgi.xml'), path.join(this.props.service,'META-INF/spring', this.props.component.toLowerCase()  +'-service-osgi.xml'), null, { 'interpolate': /<%=([\s\S]+?)%>/g });
    this.template(path.join('META-INF', 'MANIFEST.INF'), path.join(this.props.service, 'META-INF', 'MANIFEST.MF'));

  },

  end: function(){
    this.config.set(this.props)
  }
});

