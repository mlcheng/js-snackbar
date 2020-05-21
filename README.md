# js-snackbar

This tiny JavaScript library shows a Snackbar notification on your page. Snackbars contain text and an action. These notifications can be used to notify users about things like a bad Internet connection.

A demo is available on my [playground](https://playground.michaelcheng.us/lib-js/snackbar/).

## Usage
A simple Snackbar can be shown in a few lines

```javascript
iqwerty.snackbar.snackbar('Please check your Internet connection', 'Reload', () => {
	location.reload();
});
```

The first parameter is the text to display on the Snackbar. The second parameter is the action text. Snackbars display an action to perform on the right hand side. The third parameter is the callback when the action text is clicked.

## Advanced customization
The Snackbar has settings that can be configured via a fourth argument to the snackbar. It contains `style`s for the `main` notification, as well as the `cta`, or the "Call To Action". The CTA is the text for the Snackbar action. Style names are the same as CSS properties.

The default time that the Snackbar stays on-screen is 10 seconds. Setting the duration to 0 makes it stay on the screen forever. Any instance of snackbar returns the `hide()` method that will hide the **currently visible snackbar**.

```javascript
{
	style: {
		main: {
		},
		cta: {
		},
	},
	settings: {
		duration: 10000,
	},
}
```

The settings may be customized by passing an options parameter as the fourth argument. For example, to turn the `cta` text green, the following options may be set

```javascript
const options = {
	style: {
		cta: {
			color: "#689f38",
		},
	},
};
```

Just remember to pass the `options` into the Snackbar.

```javascript
iqwerty.snackbar.Snackbar("Please check your Internet connection", "Reload", function() {
	reload();
}, options);
```

## Accessibility (a11y)
See the [toast library](https://github.com/mlcheng/js-toast) for more information.