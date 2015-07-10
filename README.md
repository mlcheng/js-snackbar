# js-snackbar

This tiny JavaScript library shows a Snackbar notification on your page. Snackbars contain text and an action. These notifications can be used to notify users about things like a bad Internet connection.

**The iQwerty [`toast.js`](https://github.com/mlcheng/js-toast) library is a required dependency for the Snackbar.**

A demo is available on my [playground](http://www.michaelcheng.us/playground/lib-js/snackbar/).

## Usage
A simple Snackbar can be shown in one line

```javascript
iqwerty.snackbar.Snackbar("Please check your Internet connection", "Reload", function() {
	reload();
});
```

The first parameter is the text to display on the Snackbar. The second parameter is the action text. Snackbars display an action to perform on the right hand side. The third parameter is the callback when the action text is clicked.

## Advanced customization
The Snackbar has default settings in the Snackbar.prototype.DEFAULT_SETTINGS object. It contains `style`s for the `main` notification, as well as the `cta`, or the "call to action". The call to action is the text for the Snackbar action.

```javascript
{
	style: {
		main: {
		},
		cta: {
		}
	},
	settings: {
		duration: 10000
	}
}
```

The settings may be customized by passing an options parameter as the fourth argument. For example, to turn the `cta` text green, the following options may be set

```javascript
var options = {
	style: {
		cta: {
			color: "#689f38"
		}
	}
};
iqwerty.snackbar.Snackbar("Please check your Internet connection", "Reload", function() {
	reload();
}, options);
```
