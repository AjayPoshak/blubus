import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../client/reducers';
import App from '../../client/routes';
import renderFullPage from '../helpers';

const HydrateState = async (ctx, next) => {
	const store = createStore(rootReducer, ctx.hydrateState),
		preloadedState = store.getState(),
		context = {};

	const html = renderToString(<Provider store={store}>
		<StaticRouter location={ctx.request.url} context={context}>
			<App />
		</StaticRouter>
	</Provider>);
	if (context.url) {
		// @TODO : Handle redirection properly
		ctx.response.status(301, { Location: context.url });
	} else {
		// we are good, send response
		ctx.body = renderFullPage(html, preloadedState);
	}
	await next();
};

export default HydrateState;
