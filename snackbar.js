/***********************************************

  "snackbar.js"

  Created by Michael Cheng on 06/22/2015 09:40
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

"use strict";

var iqwerty = iqwerty || {};

iqwerty.snackbar = (function() {
	function Snackbar(text, cta, action, options) {
		options = Snackbar.prototype.mergeOptions(options, Snackbar.prototype.DEFAULT_SETTINGS);

		/**
		 * The text to show in the Snackbar. This includes the call to action (cta) and its corresponding action.
		 * @type {String}
		 */
		var _text = Snackbar.prototype.configureAction(text, cta, action, options.style.cta);
		iqwerty.toast.Toast.call(this, _text, options);


		// free the _text
		_text = null;
	};

	var _snackbarStage = null;
	function getSnackbarStage() {
		return _snackbarStage;
	};
	function setSnackbarStage(snackbarStage) {
		_snackbarStage = snackbarStage;
	};

	Snackbar.prototype = Object.create(iqwerty.toast.Toast.prototype);

	Snackbar.prototype.DEFAULT_SETTINGS = {
		style: {
			main: {
				"position": "fixed",
				"bottom": "0",
				"left": "0",
				"right": "0",

				"margin": "0",

				"max-width": "600px",
				
				"background": "#212121",
				"color": "#e0e0e0",
				"box-shadow": "none",
				"border-radius": "0",
				
				"padding": ".8em",
				
				"display": "flex",
				"flex-flow": "row nowrap",
				"justify-content": "space-between"
			},

			cta: {
				"color": "#f48fb1",
				"letter-spacing": "1px",
				"text-transform": "uppercase",
				"margin": "0 1em",
				"cursor": "pointer"
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


		var snackbarCTAStage = document.createElement("span");
		Snackbar.prototype.stylize(snackbarCTAStage, style);
		snackbarCTAStage.addEventListener("click", function() {
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