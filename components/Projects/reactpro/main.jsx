import React, { Fragment } from 'react';
import {Grid} from '@material-ui/core';
import Project1 from './item1/card';
import Project2 from './item2/card';

import './main.css';

export default () => {
  return(
      <Grid container>
        <Grid item md={6} xs={12}>
          <Project1 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project2 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project2 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project1 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project1 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Project2 />
        </Grid>
      </Grid>
  );
}
