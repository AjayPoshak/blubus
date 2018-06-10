const initialState = {
	isLoading: false,
	isError: false,
	items: [],
	error: ''
};

export default function seatLayout(state = initialState, action) {
	switch (action.type) {
	case 'REQUEST_SEATLAYOUT_DATA':
		return { ...state, isLoading: true };
	case 'RECEIVE_SEATLAYOUT_DATA':
		return { ...state, isLoading: false, items: action.data };
	case 'FAILED_SEATLAYOUT_DATA':
		return {
			...state,
			isLoading: false,
			isError: true,
			error: action.err
		};
	default:
		return state;
	}
}
