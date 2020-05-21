/***********************************************

  "snackbar.js"

  Created by Michael Cheng on 06/22/2015 09:40
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

'use strict';

import { mergeOptions, stylize, toast } from './../toast/toast';

export const snackbar = (() => {
	/**
	 * The Snackbar animation speed; how long the Toast takes to move to and from the screen
	 * @type {number}
	 */
	const SNACKBAR_ANIMATION_SPEED = 400;

	const Transitions = {
		SHOW: {
			'transition': 'opacity ' + SNACKBAR_ANIMATION_SPEED + 'ms',
			'opacity': '1'
		},

		HIDE: {
			'opacity': '0'
		}
	};

	const DEFAULT_SETTINGS = {
		style: {
			main: {
				'position': 'fixed',
				'left': '0',
				'right': '0',
				'bottom': '0',

				'margin': '0',

				'max-width': '600px',

				'background': '#212121',
				'color': '#e0e0e0',
				'box-shadow': 'none',
				'border-radius': '0',

				'padding': '.8em',

				'display': 'flex',
				'flex-flow': 'row nowrap',
				'align-items': 'center',
				'justify-content': 'space-between',
				'text-align': 'left',
				'opacity': '0',

				'-webkit-transform': 'none',
				'transform': 'none'
			},

			cta: {
				'color': '#f48fb1',
				'letter-spacing': '1px',
				'text-transform': 'uppercase',
				'margin': '0 1em',
				'cursor': 'pointer'
			}
		},

		settings: {
			duration: 10000,
		},
	};

	let snackbarInstance;

	function snackbar(text, cta, action, options) {
		let _options = options || {};
		_options = mergeOptions(DEFAULT_SETTINGS, _options);

		/**
		 * The DocumentFragment to show in the Snackbar. This includes the call to action (cta) and its corresponding action.
		 * @type {DocumentFragment}
		 */
		const _text = configureAction(text, cta, action, _options.style.cta);
		snackbarInstance = toast.toast(_text, _options, Transitions);
		return snackbarInstance;
	}

	function configureAction(text, cta, action, style) {
		const out = document.createDocumentFragment();
		out.appendChild(document.createTextNode(text));

		const snackbarCTAStage = document.createElement('span');
		stylize(snackbarCTAStage, style);
		snackbarCTAStage.addEventListener('click', () => {
			snackbarInstance.hide();
			if(action) action();
		});

		snackbarCTAStage.appendChild(document.createTextNode(cta));
		out.appendChild(snackbarCTAStage);

		return out;
	}

	return { snackbar };
})();