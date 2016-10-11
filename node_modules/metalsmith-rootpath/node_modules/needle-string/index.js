'use strict';
module.exports = function (haystack, needle) {
	if (typeof haystack !== 'string' || typeof needle !== 'string') {
		throw new TypeError('needle-string expects string arguments');
	}

	return haystack.split(needle).length - 1;
};
