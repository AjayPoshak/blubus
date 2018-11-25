import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

/*
	Switch only renders the first match. Subrouting happens downstream
	https://reacttraining.com/react-router/web/api/Switch
*/

const HomePage = Loadable({
	loader: () => import('./views/HomePage'),
	loading: () => <p>Loading...</p>
});

const Listing = Loadable({
	loader: () => import('./views/Listing'),
	loading: () => <p>Loading...</p>
});

const SeatLayout = Loadable({
	loader: () => import('./views/SeatLayout'),
	loading: () => <p>Loading...</p>
});

const OrderSummary = Loadable({
	loader: () => import('./views/OrderSummary'),
	loading: () => <p>Loading...</p>
});

const Confirmation = Loadable({
	loader: () => import('./views/Confirmation'),
	loading: () => <p>Loading...</p>
});

const App = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/listing" component={Listing} />
		<Route exact path="/seatlayout" component={SeatLayout} />
		<Route exact path="/summary" component={OrderSummary} />
		<Route path="/confirmation" component={Confirmation} />
	</Switch>
);

export default hot(module)(App);
