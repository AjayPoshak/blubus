import React from 'react';
import { createStore } from 'redux';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { getBundles } from 'react-loadable/webpack';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from '../../client/routes';
import renderFullPage from '../renderer';
import rootReducer from '../../client/reducers';
import stats from '../../build/react-loadable.json';

const HydrateState = async (ctx, next) => {
	const store = createStore(rootReducer, ctx.hydrateState),
		preloadedState = store.getState(),
		sheet = new ServerStyleSheet(),
		context = {};

	const modules = [];
	const report = (moduleName) => {
		modules.push(moduleName);
	};
	const html = renderToString(
		<Loadable.Capture report={report}>
			<Provider store={store}>
				<StyleSheetManager sheet={sheet.instance}>
					<StaticRouter location={ctx.request.url} context={context}>
						<App />
					</StaticRouter>
				</StyleSheetManager>
			</Provider>
		</Loadable.Capture>
	);
	const loadableBundles = getBundles(stats, modules);
	const styleTags = sheet.getStyleTags();
	if (context.url) {
		// @TODO : Handle redirection properly
		ctx.response.status(301, { Location: context.url });
	} else {
		// we are good, send response
		ctx.body = renderFullPage(html, preloadedState, styleTags, global.bundles, loadableBundles);
	}
	await next();
};

export default HydrateState;
