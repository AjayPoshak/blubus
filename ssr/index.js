// eslint-disable-next-line
import * as type from 'babel-polyfill'

import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import serve from 'koa-static';
import Router from 'koa-router';
import routes from './routes';

/**
 * Require routes
 */
// require('./routes')(router);

const app = new Koa(),
	router = new Router();

app.use(serve('.')); // Serving static build files
app.use(bodyparser()); // Parsing body of every request

/**
 * Logging time taken by a request
 */
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const end = new Date();
	console.log(`${ctx.method} ${ctx.url} time taken ${end - start}`);
});
/**
 * Handling errors globally
 */
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.error(`Global error handling ${err}`);
	}
});

routes(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8081);
console.log(`Server side rendering started on ${process.env.PORT || 8081}`);
