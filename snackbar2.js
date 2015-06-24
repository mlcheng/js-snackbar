/***********************************************

  "snackbar2.js"

  Created by Michael Cheng on 06/22/2015 09:40
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

"use strict";

var iqwerty = iqwerty || {};

iqwerty.snackbar = (function() {
	function Snackbar(text, cta, action, options) {
		//options = Snackbar.prototype.mergeOptions(options, Snackbar.prototype.DEFAULT_SETTINGS);
		//iqwerty.toast.Toast.call(this, text, options);
		
		if(getSnackbarStage() != null) {
			Snackbar.prototype.toastQueue.push({text: text, cta: cta, action: action, options: options});
		} else {
			var options = options == undefined ? {} : options;
			options = Snackbar.prototype.mergeOptions(Snackbar.prototype.DEFAULT_SETTINGS, options);

			Snackbar.prototype.show(text, cta, action, options);

			options = null;
		}
	};

	var _snackbarStage = null;
	function getSnackbarStage() {
		return _snackbarStage;
	};
	function setSnackbarStage(snackbarStage) {
		_snackbarStage = snackbarStage;
	};

	Snackbar.prototype.toastQueue = [];

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

	Snackbar.prototype.show = function(text, options) {
		console.log("Showing");
	};
	
	return {
		Snackbar: Snackbar
	};
})();