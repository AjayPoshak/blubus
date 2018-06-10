export function fetchingData() {
	return {
		type: 'REQUEST_SEATLAYOUT_DATA'
	};
}

export function dataFetchSuccess(data) {
	console.log(data);
	return {
		type: 'RECEIVE_SEATLAYOUT_DATA',
		data
	};
}

export function dataFetchFailed(err) {
	return {
		type: 'FAILED_SEATLAYOUT_DATA',
		err
	};
}
