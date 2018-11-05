import React, { Fragment } from 'react';
import {Grid} from '@material-ui/core';
import MyBot from './restaurant_bot/card';
import Project2 from './item2/card';

import './main.css';

export default () => {
  return(
      <Grid container>
        <Grid item md={6} xs={12}>
          <MyBot />
        </Grid>
      </Grid>
  );
}
