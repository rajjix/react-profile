import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="botspro-card">
      <CardActionArea>
        <CardMedia
          className="project2-card-media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Project 2
          </Typography>
          <Typography component="p" id="description">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={6} >
            <Button id="card-button-bots">
              Github
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button id="card-button-bots">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
