'use strict';

var marble = require('marble');
var path = require('path');

module.exports = {
	apiConfig: {
		project: {
			refs: ['v1.5.3', 'v2.1.3'],
			repo: 'senna.js',
			src: 'src/**/*.js',
			user: 'liferay'
		}
	},
	metalComponents: ['electric-marble-components'],
	plugins: ['electric-plugin-apidocs'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**']
};