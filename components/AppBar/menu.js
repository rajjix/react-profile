import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import Contact from '../Contact/contact';
import Projects from '../Projects/projects';
import Home from '../main/home';
import { Route, Link } from 'react-router-dom';

import './menu.css';

const styles = {
  mainBody: {
    background: 'linear-gradient(to right, #d7d3cc, #304352)',
    paddingTop: '2vh',
    paddingBottom: '5px'
  },
  menuitems: {
    textAlign: "center",
  },
  menubar: {
    marginRight: '2vw',
    marginLeft: '2vw',
    width: '94vw',
    background: 'transparent',
    zIndex: '2'
  }
}

export default () => {
  return (
    <div style={styles.mainBody}>
      <AppBar position="sticky" style={styles.menubar} id="bar">
        <Toolbar variant="dense">
          <Grid container justify="flex-end">
            <Grid item md={10} xs={4} className="item">
              <Link to="/" style={{ textDecoration: 'none' }}><Button>Home</Button></Link>
            </Grid>
            <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
              <Link to="/contact" style={{ textDecoration: 'none' }}><Button>Contact</Button></Link>
            </Grid>
            <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
              <Link to="/projects" style={{ textDecoration: 'none' }}><Button>Projects</Button></Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={ Contact } />
      <Route path="/projects" component={ Projects } />
    </main>
    </div>
  );
}
