import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';

/*
	Switch only renders the first match. Subrouting happens downstream
	https://reacttraining.com/react-router/web/api/Switch
*/

const App = () => (
	<Switch>
		<Route exact path="/home" component={HomePage} />
	</Switch>
);

export default App;
