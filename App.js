import React, { Component, Fragment } from 'react';
import MenuBar from './components/AppBar/menu';
import BaseRouter from './routes';

import './App.css';

class App extends Component {
    render() {
        return (
          <Fragment>
            <MenuBar />
            <BaseRouter />
          </Fragment>
      )
  }
}

export default App;
