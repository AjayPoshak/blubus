export function requestListing() {
	return {
		type: 'REQUEST_LISTING'
	};
}

export function receiveListing(data) {
	return {
		type: 'RECEIVE_LISTING',
		data
	};
}

export function invalidResponse(err) {
	return {
		type: 'FAILED_LISTING',
		err
	};
}
