import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/LandingPage';
import { BookingPage } from 'pages/BookingPage';

export const Routes = () => (
	<Switch>
		<Route path='/' exact component={LandingPage} />
		<Route path='/booking/:id' component={BookingPage} />
	</Switch>
);
