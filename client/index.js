/** global document, Raven */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './routes';
import configureStore from './store';
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState); // Initial State can be passed here

// eslint-disable-next-line
if (__ENV__ !== 'PRODUCTION') {
	// eslint-disable-next-line
	Raven.config('https://354e971ff9b945f8a047feea16d6d74e@sentry.io/1235360', {
		release: '0-0-0',
		environment: 'production'
	}).install();
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// eslint-disable-next-line
injectGlobal`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Roboto', sans-serif;
	}

	ul {
		list-style-type: none;
	}
`;
