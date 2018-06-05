import { combineReducers } from 'redux';
import homePage from './reducers/homePage';
import listing from './reducers/listing';

export default combineReducers({
	homePage,
	listing,
});
