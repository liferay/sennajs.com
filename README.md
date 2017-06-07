# [sennajs.wedeploy.io](http://sennajs.wedeploy.io) [![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

This repository contains the source code of the website [sennajs.wedeploy.io](http://sennajs.wedeploy.io), the new site in development for [sennajs.com](sennajs.com). If you're looking for the source code of the library, check the official [Senna.js repository](https://github.com/liferay/senna.js).

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g electric-cli@alpha
```

3. Install our local dependencies:

```sh
npm i
```

## Usage

* Build the site, serve it locally, and watch for any changes:

```
electric run
```

* Deploy to production (send build files to `wedeploy` branch):

```
electric deploy
```

## License

[BSD License](https://github.com/liferay/sennajs.com/blob/master/LICENSE) © Liferay, Inc.
