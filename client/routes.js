import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import Listing from './views/Listing';

/*
	Switch only renders the first match. Subrouting happens downstream
	https://reacttraining.com/react-router/web/api/Switch
*/

const App = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/listing" component={Listing} />
	</Switch>
);

export default App;
