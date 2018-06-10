import { combineReducers } from 'redux';

import listing from './listing';
import homePage from './homePage';
import seatLayout from './seatLayout';
import orderSummary from './orderSummary';

export default combineReducers({
	listing,
	homePage,
	seatLayout,
	orderSummary
});
