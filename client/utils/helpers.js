/* global Raven, __ENV__ */
export default function logErrorToService(error, info) {
	if (typeof Raven !== 'undefined' && __ENV__ === 'PRODUCTION') {
		Raven.captureException(error, { extra: info });
	}
}
