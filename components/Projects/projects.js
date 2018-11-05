import React, { Component } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import ReactList from './reactpro/main';
import DjangoList from './djangopro/main';
import BotList from './botspro/main';
import './projects.css';


function TabContainer(props) {
  return (
    <Typography component="div" id="project-container">
      {props.children}
    </Typography>
  );
}

class Projects extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    const {value } = this.state;
    return(
      <div>
        <AppBar id="tabbar" style={{width:"100%"}}>
          <Tabs
            value = { value }
            onChange={ this.handleChange }
            indicatorColor="secondary"
            style={{color:"#333"}}
            centered
          >
            <Tab label="React" />
            <Tab label="Django" />
            <Tab label="Bots"  />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ReactList /></TabContainer>}
        {value === 1 && <TabContainer><DjangoList /></TabContainer>}
        {value === 2 && <TabContainer><BotList /></TabContainer>}
      </div>
    );
  }
}

export default Projects;
