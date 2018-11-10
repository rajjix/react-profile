import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/main/home';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Test from './components/Projects/reactpro/item/test';

import './App.css';

class App extends Component {
    render() {
        return (
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/test" component={Test} />
            </main>
        )
  }
}

export default App;
