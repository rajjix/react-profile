import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import './menu.css';

const styles = {
  menuitems: {
    textAlign: "center",
  }
}

export default () => {
  return (
    <AppBar position="sticky" id="bar">
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          <Grid item md={10} xs={4} className="item">
            <Button href="/">Home</Button>
          </Grid>
          <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
            <Button href="/contact">Contact</Button>
          </Grid>
          <Grid item md={1} xs={4} className="item" style={styles.menuitems}>
            <Button href="/projects">Projects</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
