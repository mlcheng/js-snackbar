/***********************************************

  "snackbar.js"

  Created by Michael Cheng on 06/22/2015 09:40
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

'use strict';

var iqwerty = iqwerty || {};

iqwerty.snackbar = (function() {

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


	function Snackbar(text, cta, action, options) {
		var _options = options || {};
		_options = Snackbar.prototype.mergeOptions(Snackbar.prototype.DEFAULT_SETTINGS, _options);

		/**
		 * The text to show in the Snackbar. This includes the call to action (cta) and its corresponding action.
		 * @type {String}
		 */
		var _text = Snackbar.prototype.configureAction(text, cta, action, _options.style.cta);
		iqwerty.toast.Toast.call(this, _text, _options, Transitions);


		// free the _text
		_text = null;

		// free the options
		_options = null;
	}

	Snackbar.prototype = Object.create(iqwerty.toast.Toast.prototype);

	Snackbar.prototype.DEFAULT_SETTINGS = {
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
			duration: 10000
		}
	};

	Snackbar.prototype.configureAction = function(text, cta, action, style) {
		var snackbar = this;

		var out = document.createDocumentFragment();
		out.appendChild(document.createTextNode(text));


		var snackbarCTAStage = document.createElement('span');
		Snackbar.prototype.stylize(snackbarCTAStage, style);
		snackbarCTAStage.addEventListener('click', function() {
			snackbar.hide();
			snackbar = null;
			action();
		});


		snackbarCTAStage.appendChild(document.createTextNode(cta));
		out.appendChild(snackbarCTAStage);

		return out;
	};
	
	return {
		Snackbar: Snackbar
	};
})();