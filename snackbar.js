/***********************************************

  "snackbar.js"

  Created by Michael Cheng on 06/19/2015 16:37
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

"use strict";

var iqwerty = iqwerty || {};

iqwerty.snackbar = (function() {
	function Snackbar(text, cta, action, options) {
		var options = options == undefined ? {} : options;
		options = Snackbar.prototype.mergeOptions(Snackbar.prototype.DEFAULT_SETTINGS, options);

		Snackbar.prototype.show(text, cta, action, options);
	};

	Snackbar.prototype.SNACKBAR_ANIMATION_SPEED = 400;

	Snackbar.prototype.DEFAULT_SETTINGS = {
		style: {
			main: {
				"position": "fixed",
				"bottom": "0",
				"left": "0",
				"right": "0",
				
				"background": "#212121",
				"color": "#e0e0e0",
				
				"padding": ".8em",
				
				"display": "flex",
				"flex-flow": "row nowrap",
				"justify-content": "space-between"
			},

			cta: {
				"color": "#f48fb1",
				"letter-spacing": "1px",
				"text-transform": "uppercase",
				"margin": "0 1em"
			}
		},

		settings: {
			duration: 12000 // 12 seconds
		}
	};

	var _snackbarStage = null;
	function getSnackbarStage() {
		return _snackbarStage;
	};
	function setSnackbarStage(snackbarStage) {
		_snackbarStage = snackbarStage;
	};

	Snackbar.prototype.mergeOptions = function(initialOptions, customOptions) {
		var merged = customOptions;
		for(var prop in initialOptions) {
			if(merged.hasOwnProperty(prop)) {
				if(initialOptions[prop] != null && initialOptions[prop].constructor == Object) {
					merged[prop] = Toast.prototype.mergeOptions(initialOptions[prop], merged[prop]);
				}
			} else {
				merged[prop] = initialOptions[prop];
			}
		}
		return merged;
	};

	Snackbar.prototype.generate = function(text, cta, action, options) {
		var snackbarStage = document.createElement("div");
		Snackbar.prototype.stylize(snackbarStage, options.style.main);
		snackbarStage.appendChild(document.createTextNode(text));


		var snackbarCTA = document.createElement("span");
		Snackbar.prototype.stylize(snackbarCTA, options.style.cta);
		snackbarCTA.appendChild(document.createTextNode(cta));
		snackbarStage.appendChild(snackbarCTA);


		document.body.insertBefore(snackbarStage, document.body.firstChild);


		setSnackbarStage(snackbarStage);
		snackbarStage = null;
		snackbarCTA = null;
	};

	Snackbar.prototype.stylize = function(element, styles) {
		Object.keys(styles).forEach(function(style) {
			element.style[style] = styles[style];
		});
	};

	Snackbar.prototype.show = function(text, cta, action, options) {
		Snackbar.prototype.generate(text, cta, action, options);
	};

	return {
		Snackbar: Snackbar
	};
})();