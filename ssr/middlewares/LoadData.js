import axios from 'axios';
import { HOME_PG_API_URL, LISTING_API_URL } from '../../client/utils/constants';

const LoadData = async (ctx, next) => {
	switch (ctx.request.url) {
	case '/home': {
		const homePage = {};
		const response = await axios.get(HOME_PG_API_URL);
		homePage.items = response.data.result;
		ctx.hydrateState = { ...ctx.hydrateState, homePage };
		await next();
		break;
	}

	case '/listing': {
		const listing = {};
		const response = await axios.get(LISTING_API_URL);
		listing.items = response.data.result;
		ctx.hydrateState = { ...ctx.hydrateState, listing };
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
