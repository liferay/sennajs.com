'use strict';

import Autocomplete from 'metal-autocomplete';
import Component from 'metal-component';
import {ElectricAPIAutocomplete} from 'electric-marble-components';
import Toggler from 'metal-toggler';

class ElectricApi extends Component {
	attached() {
		const {project} = this;

		this.autocomplete_ = new ElectricAPIAutocomplete({
			dataSource: `/api/${project.ref}/API.json`,
			maxResults: 4,
			project,
			input: document.querySelector('input[name="query"]')
		});

		this.dropdowns_ = new Toggler({
			content: '.version-dropdown .dropdown-menu',
			header: '.version-dropdown .btn'
		});

		this.toggler_ = new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-header'
		});
	}

	disposed() {
		this.autocomplete_.dispose();
		this.dropdowns_.dispose();
		this.toggler_.dispose();
	}
}

ElectricApi.STATE = {
	project: {
	}
};

export default ElectricApi;
