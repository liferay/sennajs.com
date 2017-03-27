'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './soy-post.soy';

class pageBlogFirstPost extends Component {
};

Soy.register(pageBlogFirstPost, templates);

export default pageBlogFirstPost;