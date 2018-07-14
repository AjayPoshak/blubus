/* global Raven, __ENV__ */
export default function logErrorToService(error, info) {
	if (typeof Raven !== 'undefined' && __ENV__ === 'PRODUCTION') {
		Raven.captureException(error, { extra: info });
	}
}

/**
 * Sets debouncing for function passed in callback
 * @param {*} callBack Function to be called after delay
 * @param {*} delay Time in milliseconds after which the function should be called
 */
export function debounce(callBack, delay) {
	let tId;
	return value => {
		clearTimeout(tId);
		tId = setTimeout(() => {
			callBack(value);
		}, delay || 300);
	};
}
