import axios from 'axios';

import { fetchingData, dataFetchSuccess, dataFetchFailed } from '../../actions/seatLayout';
import { SEATLAYOUT_API_URL } from '../../utils/constants';

const fetchData = () => (dispatch) => {
	dispatch(fetchingData());
	axios
		.get(SEATLAYOUT_API_URL)
		.then(response => dispatch(dataFetchSuccess(response.data.result)))
		.catch(err => dispatch(dataFetchFailed(err)));
};

export default fetchData;
