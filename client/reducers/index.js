import { combineReducers } from 'redux';

import homePage from './homePage';
import listing from './listing';
import seatLayout from './seatLayout';

export default combineReducers({
	homePage,
	listing,
	seatLayout
});
