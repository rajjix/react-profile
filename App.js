import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/main/home';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Demo from './components/Projects/reactpro/item/test';
import NotFound from './components/main/notfound';

import './App.css';

const DRFPANEL = process.env.REACT_APP_DRFPANEL;
const SECRET = process.env.REACT_APP_SECRET;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/test" component={Demo} />
                    <Route path={SECRET} component={() => window.location = DRFPANEL}/>
                    <Route component={ NotFound } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
