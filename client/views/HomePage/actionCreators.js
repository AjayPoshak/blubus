import axios from 'axios';
import { loadingSearch, receiveSearch, failedSearch } from '../../actions/homePage';
import { HOME_PG_API_URL } from '../../utils/constants';

export function fetchSearch() {
	return ((dispatch) => {
		dispatch(loadingSearch());
		axios.get(HOME_PG_API_URL)
			.then(response => dispatch(receiveSearch(response.data.result)))
			.catch(err => dispatch(failedSearch(err.message)));
	});
}

export function dummy() {}
