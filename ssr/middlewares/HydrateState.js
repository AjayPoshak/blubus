import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from '../../client/routes';
import renderFullPage from '../renderer';
import rootReducer from '../../client/reducers';

const HydrateState = async (ctx, next) => {
	const store = createStore(rootReducer, ctx.hydrateState),
		preloadedState = store.getState(),
		sheet = new ServerStyleSheet(),
		context = {};

	const html = renderToString(
		<Provider store={store}>
			<StyleSheetManager sheet={sheet.instance}>
				<StaticRouter location={ctx.request.url} context={context}>
					<App />
				</StaticRouter>
			</StyleSheetManager>
		</Provider>
	);
	const styleTags = sheet.getStyleTags();
	if (context.url) {
		// @TODO : Handle redirection properly
		ctx.response.status(301, { Location: context.url });
	} else {
		// we are good, send response
		ctx.body = renderFullPage(html, preloadedState, styleTags, global.bundles);
	}
	await next();
};

export default HydrateState;
