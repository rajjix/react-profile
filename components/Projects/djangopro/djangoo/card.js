import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="djangopro-card">
      <CardActionArea>
        <CardMedia
          className="project1-card-media"
          image="https://ichef.bbci.co.uk/images/ic/960x540/p01bqgy6.jpg"
          title="Django"
          style={{height:"300px"}}
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Coming Soon
          </Typography>
          <Typography component="p" id="description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button id="card-button-django">
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button id="card-button-django">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
