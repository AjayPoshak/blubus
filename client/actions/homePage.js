export const loadingSearch = () => ({
	type: 'LOAD_SEARCH'
});

export const receiveSearch = data => ({
	type: 'RECEIVE_SEARCH',
	data
});

export const failedSearch = err => ({
	type: 'FAILED_SEARCH',
	err
});

export const search = value => ({
	type: 'SEARCH',
	term: value
});
