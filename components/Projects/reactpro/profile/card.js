import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="reactpro-card">
      <CardActionArea>
        <CardMedia
          image="https://preview.ibb.co/cq1Hnf/profile.png"
          title="Profile"
          style={{height:"200px"}}
          href="www.google.com"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Profile Website
          </Typography>
          <Typography component="p" id="description" style={{textAlign:"justify"}}>
             If you like what your seeing,
            then today is your lucky day because 
            I'm sharing the code of this website.<br/>
            <strong>P.S.: </strong>Change screen size to check how the content adjusts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button href="https://github.com/rajjix/react-profile" target="_blank" id="card-button-react">
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button href="/" id="card-button-react">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
