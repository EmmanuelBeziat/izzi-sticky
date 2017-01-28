/*!
 * A lightweight and simple plugin to have sticky stuff.
 * Version : 2.0.2
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-izzi-sticky
 **/

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.IzziSticky = factory();
	}
}(this, function () {
	var IzziSticky = function (el, options){
		'use strict';

		var self = Object.create(IzziSticky.prototype);

		/**
		 * Default settings
		 */
		self.options = {
			heightValue: 0,
			classIsSticky: 'is-sticky',
			onStick: null,
			onUnstick: null
		};

		/**
		 * User defined options
		 */
		if (options) {
			Object.keys(options).forEach(function (key){
				self.options[key] = options[key];
			});
		}

		/**
		 * By default, search for an item with 'data-sticky' attribute
		 */
		if (!el) {
			self.sticky = document.querySelector('[data-sticky]');
		}

		if (el && 'string' === typeof el) {
			self.sticky = document.querySelector(el);
		}
		else if (el && 'object' === typeof el) {
			self.sticky = el;
		}
		else {
			throw new Error('[IzziSticky] Unable to get a valid object to stick');
		}

		/**
		 * Add classe on the sticky element
		 * Allow callback onStick
		 */
		var stickApply = function (element) {
			element.classList.add(self.options.classIsSticky);

			// callback
			if ('function' === typeof self.options.onStick) {
				self.options.onStick();
			}
		};

		/**
		 * Remove classes on the sticky element
		 * Allow callback onUnstick
		 */
		var stickRemove = function (element) {
			element.classList.remove(self.options.classIsSticky);

			// callback
			if ('function' === typeof self.options.onUnstick) {
				self.options.onUnstick();
			}
		};

		/**
		 * Main build function
		 * 1. Add the content class when loading, if the input's value is already defined
		 * 2. Fire events when focus and blur happen
		 */
		var init = function () {
			if (self.sticky) {
				window.addEventListener('scroll', function() {
					var hasStickyClass = self.sticky.classList.contains(self.options.classIsSticky);

					if (window.pageYOffset >= self.options.heightValue && !hasStickyClass) {
						stickApply(self.sticky);
					}
					else if (window.pageYOffset < self.options.heightValue && hasStickyClass) {
						stickRemove(self.sticky);
					}
				});
			}
		};


		init();
		return self;
	};
	return IzziSticky;
}));