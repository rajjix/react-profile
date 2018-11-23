import React, { Component } from 'react';
import Home from './components/main/home';
import AsyncComponent from './components/asyncComponent';
import Menu from './components/AppBar/menu';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home',
		}
	}
	onRouteChange = (route) => {
		this.setState({route: route});
	}
  render() {
		if (this.state.route === 'home') {
			return (
				<div>
					<Menu onRouteChange = {this.onRouteChange} />
					<Home onRoutechange = {this.onRouteChange} />
				</div>
			);
		} else if (this.state.route === 'contact') {
			const AsyncContact = AsyncComponent(() => import('./components/Contact/contact'));
			return <AsyncContact onRouteChange={this.onRouteChange} />
		} else if (this.state.route === 'projects') {
			const AsyncProjects = AsyncComponent(() => import('./components/Projects/projects'));
			return (
				<div>
					<Menu onRouteChange = {this.onRouteChange} />
					<AsyncProjects/>
				</div>
			);
    }
	}
}

export default App;
