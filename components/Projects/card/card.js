import React, { Fragment } from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import './card.css';

const styles = {
  proCard: {
    margin: '5px',
    backgroundColor: '#aeaeae',
    borderRadius: '5%',
    boxShadow: 'inset 0 0 30px black, 0 0 30px black'
  },
  cardButton: {
    textAlign: 'center',
    textColor: 'black',
    background: 'green',
    width: '90%',
    marginBottom: '10px',
    border: '2px solid red',
    boxShadow: 'inset 0 0 50px gray, 0 0 20px red'
  },
  description: {
    fontSize: '1.2em',
  }
}


export default (props) => {
  return(
    <Card style={styles.proCard}>
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
          <Typography component="p" style={styles.description}>
            { props.description }
            { props.ps ? <Fragment><br /><br /><strong>P.S.: </strong>{props.ps}</Fragment> : "" }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button href={ props.github } target="_blank" style={styles.cardButton} disabled={props.disabled}>
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button href={ props.livedemo } target="_blank" style={styles.cardButton} disabled={props.disabled}>
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
