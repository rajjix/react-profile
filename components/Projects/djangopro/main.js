import React from 'react';
import {Grid} from '@material-ui/core';
import Djangoo from './djangoo/card';

import './main.css';

export default () => {
  return(
      <Grid container>
        <Grid item md={6} xs={12}>
          <Djangoo />
        </Grid>
        <Grid item md={6} xs={12}>
          <Djangoo />
        </Grid>
        <Grid item md={6} xs={12}>
          <Djangoo />
        </Grid>
      </Grid>
  );
}
