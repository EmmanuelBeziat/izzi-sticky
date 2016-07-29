/*!
 * A lightweight and simple plugin to have sticky stuff.
 * Version : 1.0.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-izzi-sticky
 **/
(function() {

	this.IzziSticky = function() {
		var defaults = {
			heightValue: 0,
			classIsSticky: 'is-sticky',
			onStick: null,
			onUnstick: null
		};

		this.element = null;
		this.options = extendDefaults(defaults, arguments[0]);
	}

	/**
	 * Main functino called by the plugin
	 * @param  {DOM object} element [The form to be set with the plugin]
	 */
	IzziSticky.prototype.init = function(element) {
		this.element = element;

		build.call(this);
	}

	/**
	 * Add classe on the sticky element
	 * Allow callback onStick
	 */
	function stickApply(element, plugin) {
		element.classList.add(plugin.options.classIsSticky);
		plugin.options.onStick;
	}

	/**
	 * Remove classes on the sticky element
	 * Allow callback onUnstick
	 */
	function stickRemove(element, plugin) {
		element.classList.remove(plugin.options.classIsSticky);
		plugin.options.onUnstick;
	}

	/**
	 * Extend defaults properties with user options
	 */
	function extendDefaults(source, properties) {
		var property;

		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}

		return source;
	}

	/**
	 * Main build function
	 * Fire events when the page offset is higher than the value
	 */
	function build() {
		var plugin = this;
		var element = this.element;

		if (element) {
			window.addEventListener('scroll', function() {
				if (window.pageYOffset >= plugin.options.heightValue) {
					stickApply(element, plugin);
				}
				else {
					stickRemove(element, plugin);
				}
			});
		}
}

})();
