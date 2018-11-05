import React from 'react';
import {Grid} from '@material-ui/core';
import Profile from './profile/card';
import Project2 from './item2/card';

import './main.css';

export default () => {
  return(
      <Grid container>
        <Grid item md={6} xs={12}>
          <Profile />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project2 />
        </Grid>
      </Grid>
  );
}
