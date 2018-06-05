const initialState = {
	isLoading: false,
	isError: false,
	items: {},
	error: '',
};

export default function listing(state = initialState, action) {
	switch (action.type) {
	case 'REQUEST_LISTING':
		return { ...state, isLoading: true };


	case 'RECEIVE_LISTING':
		return { ...state, isLoading: false, items: action.data };

	case 'FAILED_LISTING':
		return {
			...state, isLoading: false, isError: true, error: action.err,
		};

	default:
		return state;
	}
}
