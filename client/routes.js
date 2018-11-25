import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Listing from './views/Listing';
import HomePage from './views/HomePage';
import SeatLayout from './views/SeatLayout';
import OrderSummary from './views/OrderSummary';
import Confirmation from './views/Confirmation';

/*
	Switch only renders the first match. Subrouting happens downstream
	https://reacttraining.com/react-router/web/api/Switch
*/

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
