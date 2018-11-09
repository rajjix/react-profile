import React from 'react';
import {Grid} from '@material-ui/core';
import Profile from './profile/card';
import Dummy from './item/card';

export default () => {
  return(
      <Grid container>
        <Grid item md={6} xs={12}>
          <Profile />
        </Grid>
        <Grid item md={6} xs={12}>
          <Dummy />
        </Grid>
      </Grid>
  );
}
