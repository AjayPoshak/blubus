export default function homePage(
	state = {
		isLoading: false,
		isError: false,
		errorMsg: '',
		data: {},
		searchResult: []
	},
	action
) {
	switch (action.type) {
	case 'LOAD_SEARCH':
		return { ...state, isLoading: true };

	case 'RECEIVE_SEARCH':
		return { ...state, isLoading: false, data: action.data };

	case 'FAILED_SEARCH':
		return {
			...state,
			isLoading: false,
			isError: true,
			errorMsg: action.err
		};

	case 'SEARCH': {
		const searchResult = state.data.filter(item => item.city.toLowerCase().indexOf(action.term) > -1);
		return { ...state, searchResult };
	}

	default:
		return state;
	}
}
