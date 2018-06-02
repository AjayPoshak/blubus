/** global document */
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

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
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
`;

