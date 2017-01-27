![version](https://img.shields.io/badge/version-2.0.1-orange.svg?style=flat-square)

# Izzi Sticky

A lightweight and simple plugin to have sticky stuff.

---

#Install

Using `npm` command, it’s as simple as this :
```bash
npm i -D izzi-sticky
```

If you use bower, you can just do

```bash
$ bower i izzi-sticky
```

Or you could just download the files on GitHub.

# How to use

```javascript
var izziSticky = new IzziSticky('[data-sticky');
```

```html
<div data-sticky>This item will be sticky</div>
```

You can pass either a html object, or a selector in a string.

Check the demo files for an example.

# Options

You can also pass options to the plugin to change it’s default settings, like this:

```javascript
var izziSticky = new IzziSticky('[data-sticky]', {
	heightValue: 200 // 200px
	classIsSticky: 'is-sticky'
});
```

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Default value</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>heightValue</th>
			<td>0</td>
			<td>int</td>
			<td>Define the value of the height when the class "sticky" should be applied</td>
		</tr>
		<tr>
			<th>classIsSticky</th>
			<td>is-sticky</td>
			<td>string</td>
			<td>The class name to be applied when the element is set to "sticky"</td>
		</tr>
		<tr>
			<th>onStick</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called when the sticky magic is applyed</td>
		</tr>
		<tr>
			<th>onUnstick</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called when the sticky magic is removed</td>
		</tr>
	</tbody>
</table>

# TODO

* Add constraint element (an element to move within)
* Add the possibility to define options in html data attribute
