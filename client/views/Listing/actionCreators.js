import axios from 'axios';
import { LISTING_API_URL } from '../../utils/constants';
import { requestListing, receiveListing, invalidResponse } from '../../actions/listing';

export const fetchListingData = () => ((dispatch) => {
	dispatch(requestListing());
	axios.get(LISTING_API_URL)
		.then(response => dispatch(receiveListing(response.data.result)))
		.catch(err => dispatch(invalidResponse(err.message)));
});


export function fetchListingDataIfNeeded() {
	return ((dispatch, getState) => {
		const { listing } = getState();
		if (listing.items && listing.items.services && listing.items.services.length) {
			return false;
		}
		dispatch(fetchListingData());
	});
}
