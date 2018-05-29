import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

// this enables the chrome devtools for redux only in development
const composeEnhancers =
	(process.env.NODE_ENV !== 'production' &&
		typeof window !== 'undefined' &&
		// eslint-disable-next-line
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const configureStore = (preloadedState = {}) => {
	const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
	return store;
};

export default configureStore;
