import React, { Component } from 'react';
import MenuBar from './components/AppBar/menu';
import BaseRouter from './routes';

import './App.css';

class App extends Component {
    render() {
        return <BaseRouter />
  }
}

export default App;
