'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './index.soy';

class docsFullyFunctional extends Component {
};

Soy.register(docsFullyFunctional, templates);

export default docsFullyFunctional;