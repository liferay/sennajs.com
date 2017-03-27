'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './index.soy';

class pageBlogIndex extends Component {
};

Soy.register(pageBlogIndex, templates);

export default pageBlogIndex;