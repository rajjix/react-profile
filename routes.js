import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/main/home';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component = { Home } />
		<Route exact path="/contact" component = { Contact } />
    <Route exact path="/projects" component = { Projects } />
	</Switch>
);

export default BaseRouter;
