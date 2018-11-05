import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default () => {
  return(
    <Card id="reactpro-card">
      <CardActionArea>
        <CardMedia
          className="project2-card-media"
          image="https://img.freepik.com/free-vector/abstract-colored-background-with-text-of-coming-soon_1017-5071.jpg?size=338&ext=jpg"
          title="Coming Soon"
          style={{height:"200px"}}
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Project 2
          </Typography>
          <Typography component="p" id="description" style={{textAlign:"justify"}}>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button id="card-button-react">
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button id="card-button-react">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
