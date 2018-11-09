import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import Contact from '../Contact/contact';
import Projects from '../Projects/projects';
import Home from '../main/home';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './menu.css';

const styles = {
  menuitems: {
    textAlign: "center",
  }
}

export default () => {
  return (
    <div id="main-body">
      <AppBar position="sticky" id="bar">
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
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/projects" component={ Projects } />
    </main>
    </div>
  );
}
