import LoadData from './middlewares/LoadData';
import HydrateState from './middlewares/HydrateState';

export default function (router) {
	router.get('/home', LoadData, HydrateState);
}
