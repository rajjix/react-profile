import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="botspro-card">
      <CardActionArea>
        <CardMedia
          className="project1-card-media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography component="p" id="description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button id="card-button-bots">
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button id="card-button-bots">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}