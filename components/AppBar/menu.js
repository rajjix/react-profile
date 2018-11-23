import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';

import './menu.css';

const styles = {
  menuitems: {
    textAlign: "center",
  },
  menubar: {
    background: 'transparent',
		margin: 'auto',
    zIndex: '2'
  }
}

const Menu = ({onRouteChange}) =>
    <AppBar postion="absolute" className="center" style={styles.menubar}>
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          <Grid item md={10} xs={4} className="item">
            <Button onClick={() =>onRouteChange('home')} >Home</Button>
          </Grid>
          <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
            <Button onClick={() =>onRouteChange('contact')}>Contact</Button>
          </Grid>
          <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
            <Button onClick={() =>onRouteChange('projects')} >Projects</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

export default Menu;
