(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory();
	} else {
		root.K = factory();
	}
}(typeof self !== "undefined" ? self : this, function () {
	const K = {};

	K.log = (message) => {
		console.log(message);
	};

	K.show = (element) => {
		element.style.visibility = "visible";
	};

	K.hide = (element) => {
		element.style.visibility = "hidden";
	};


	return K;

}));




