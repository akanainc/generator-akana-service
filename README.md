# generator-akana-service [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for writing a service/API for Akana Platform

## Description

A Yeoman generator which scaffolds the code to create a service that can be hosted on the Akana platform along with an OSGi feature bundle for deploying on the Akana platform.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-akana-service using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-akana-service
```
Then generate your new project:

```bash
yo akana-service
```

### Build

#### Requirements

- [Java SE](http://www.oracle.com/technetwork/java/javase/overview)
- [Ant](http://ant.apache.org)
- [Maven](http://maven.apache.org)

### Steps

Create symlink to the `lib` folder under your Policy Manager installation directory.

```bash
ln -s $AKANA_HOME/sm80/lib/ lib
```

#### To generate an Eclipse project

```bash
mvn eclipse:eclipse
```

#### To build

```bash
cd build
ant
```

Build artifact: OSGi Repository
Artifact: `/build/dist/$PROJECT_NAME-$VERSION.zip`

### To deploy the build

Take the built `./build/dist/$PROJECT_NAME-$VERSION.zip` file and unzip it under the `$AKANA_HOME/sm80/lib` folder. Use Akana container's Admin console to install the newly created 'Plugin'.



## Development

See [Authoring Yeoman Generators](http://yeoman.io/authoring/index.html) as well as the [generator-generator](https://github.com/yeoman/generator-generator) for more info.

For local development usage, to allow `yo` to look locally rather than npm:

* clone this repo
* cd `generator-akana-service`
* `npm link`

Now `yo` will look for the cloned repo, local copy, of the generator.

If you don't know where npm keeps its files, try `npm config get prefix` + `/lib/node_modules`.


## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

 © 2015 [Akana](http://www.akana.com)

 Apache 2.0 License



[npm-image]: https://badge.fury.io/js/generator-akana-service.svg
[npm-url]: https://npmjs.org/package/generator-akana-service
[travis-image]: https://travis-ci.org/funnyenough/generator-akana-service.svg?branch=master
[travis-url]: https://travis-ci.org/funnyenough/generator-akana-service
[daviddm-image]: https://david-dm.org/funnyenough/generator-akana-service.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/funnyenough/generator-akana-service
