import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

import './card.css';

export default () => {
  return(
    <Card id="botspro-card">
      <CardActionArea>
        <CardMedia
          id="bot-card-media"
          image="http://en.csjbot.com/upload/flashpic/20161109091804.jpg"
          title="Barashki Bot"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Restaurant Bot
          </Typography>
          <Typography component="p" id="description" style={{ textAlign:"justify" }}>
            Have you ever thought of hiring a phone operater to take orders
            from customers and provide them with various information about your restaurant
            ...Well this bot does just that, it takes orders from customers
            and notifies admins about reservation and order details
            also has a set of photo galleries to display available menus and a look around the restaurant.
            <br /><strong>P.S.:</strong> admin panel is only accessible by admin with password protection for various tasks.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12} md={6}>
            <Button href="https://github.com/rajjix/ptb-admin-user" target="_blank" id="card-button-bots">
              Github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button href="https://t.me/rajjix_bot" target="_blank" id="card-button-bots">
              LiveDemo
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
