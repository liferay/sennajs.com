# [sennajs.wedeploy.io](http://sennajs.wedeploy.io) [![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

**WARNING: This project is currently using an outdated version of Electric**

This repository contains the source code of the website [sennajs.wedeploy.io](http://sennajs.wedeploy.io), the new site in development for [sennajs.com](sennajs.com). If you're looking for the source code of the library, check the official [Senna.js repository](https://github.com/liferay/senna.js).

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g gulp
```

3. Clone repo
```sh
git clone https://github.com/jonnilundy/sennajs.com.git
```

4. Go to project
```sh
cd sennajs.com
```

5. Install our local dependencies:

```sh
npm i
```

## Running
* Compiles source files and populates on local server
```sh
gulp
```

## Deploy
* Compliles source files and pushes build folder to a new branch called 'WeDeploy'
```sh
gulp deploy
```

## License

[BSD License](https://github.com/liferay/sennajs.com/blob/master/LICENSE) © Liferay, Inc.
