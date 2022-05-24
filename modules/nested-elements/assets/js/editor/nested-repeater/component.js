import NestedModelBase from './models/nested-model-base';
import NestedViewBase from './views/nested-view-base';

import RepeaterControl from './controls/repeater';

import * as hooks from './hooks/';

export default class Component extends $e.modules.ComponentBase {
	exports = {
		NestedModelBase,
		NestedViewBase,
	};

	registerAPI() {
		super.registerAPI();

		elementor.addControlView( 'nested-elements-repeater', RepeaterControl );
	}

	getNamespace() {
		return 'nested-elements/nested-repeater';
	}

	defaultHooks() {
		return this.importHooks( hooks );
	}

	getChildrenTitle( container, index ) {
		const title = container.view.model.config.defaults.elements_title;

		// Translations comes from server side.
		return sprintf( title, index );
	}
}
