import React, { Fragment } from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

export default (props) => {
  return(
    <Card id="reactpro-card">
      <CardActionArea>
        <CardMedia
          image={ props.image }
          title={ props.imageTitle }
          style= {{ height: props.imageHeight }}
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            { props.children }
          </Typography>
          <Typography component="p" id="description" style={{textAlign:"justify"}}>
            { props.description }
            { props.ps ? <Fragment><br /><br /><strong>P.S.: </strong>{props.ps}</Fragment> : "" }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button href={ props.github } target="_blank" id="card-button-react" disabled={props.disabled}>
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button href={ props.livedemo } target="_blank" id="card-button-react" disabled={props.disabled}>
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
