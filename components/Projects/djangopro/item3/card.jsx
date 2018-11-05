import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="djangopro-card">
      <CardActionArea>
        <CardMedia
          className="project2-card-media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Project 3
          </Typography>
          <Typography component="p" id="description">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={6} >
            <Button id="card-button-django">
              Github
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button id="card-button-django">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
