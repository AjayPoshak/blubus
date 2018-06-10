import LoadData from './middlewares/LoadData';
import HydrateState from './middlewares/HydrateState';

export default function (router) {
	router.get('/', LoadData, HydrateState);
	router.get('/listing', LoadData, HydrateState);
}
