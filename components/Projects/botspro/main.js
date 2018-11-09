import React  from 'react';
import {Grid} from '@material-ui/core';
import MyBot from './restaurant_bot/card';

export default () => {
  return(
      <Grid container>
        <Grid item md={12} xs={12}>
          <MyBot />
        </Grid>
      </Grid>
  );
}
