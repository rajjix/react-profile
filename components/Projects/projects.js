import React, { Component, Fragment } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import ReactList from './reactpro/main';
import DjangoList from './djangopro/main';
import BotList from './botspro/main';



const styles = {
  tabbar: {
    margin: 'auto',
    marginTop: '10vh',
    width: '100%',
    background: 'transparent',
    position: 'relative',
    zIndex: '2',
    boxShadow: 'inset 0 0 0px black, 0 0 0px black'
  },
  projectContainer: {
    position: 'relative',
    margin: 'auto',
    marginTop: '5vh',
    marginBottom: '10vh',
    maxWidth: '80%',
    minHeight: '400px',
    background: '#555',
    border: '1px solid #ccc',
    boxShadow: 'inset 0 0 30px black, 0 0 30px black',
    zIndex:'1'
  }
  
  
}

function TabContainer(props) {
  return (
    <Typography component="div" style={styles.projectContainer}>
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
      <Fragment>
        <AppBar style={styles.tabbar}>
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
      </Fragment>
      );
  }
}

export default Projects;
