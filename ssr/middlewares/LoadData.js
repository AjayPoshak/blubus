const LoadData = async (ctx, next) => {
	switch (ctx.request.url) {
	case '/': {
		ctx.hydrateState = { ...ctx.hydrateState };
		await next();
		break;
	}

	default: {
		await next();
		break;
	}
	}
};
export default LoadData;
