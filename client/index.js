/** global document, Raven */
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './routes';
import configureStore from './store';
import GlobalStyle from './GlobalStyle';
import OfflineNotifier from './OfflineNotifier';
import ErrorBoundary from './views/HomePage/ErrorBoundary';
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState); // Initial State can be passed here

// eslint-disable-next-line
if (__ENV__ === 'PRODUCTION' && typeof Raven !== 'undefined') {
	// eslint-disable-next-line
	Raven.config('https://354e971ff9b945f8a047feea16d6d74e@sentry.io/1235360', {
		release: '0-0-0',
		environment: 'production'
	}).install();
}

Loadable.preloadReady().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<React.Fragment>
					<GlobalStyle />
					<ErrorBoundary>
						<OfflineNotifier />
						<App />
					</ErrorBoundary>
				</React.Fragment>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);
});
