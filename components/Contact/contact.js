import React from 'react';
import { Card, Grid, Button, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import './contact.css';

export default () => {
  return(
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Card id="contact-card-left">
          <CardActionArea>
            <CardContent style={{textAlign:"center"}}>
              <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="Avatar" id="contact-avatar"/>
              <Typography gutterBottom variant="h5" component="h2">
                Asaad Najjar
              </Typography>
              <Typography component="p" id="description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card id="contact-card-right">
          <CardActionArea>
            <CardContent >
              <Typography gutterBottom variant="h3" component="h2" style={{textAlign:"center"}}>
                Contact Me
              </Typography>
              <hr style={{width:"60%", borderTop:" 3px dashed black"}}/>
              <Typography component="p" className="info" id="phone-number">
                Phone: <span><strong>+380730608247</strong></span>
              </Typography>
              <Typography component="p" className="info" id="email"> 
                Email: &nbsp;&nbsp;<span><strong>rajjix.dev.1992@hotmail.com</strong></span>
              </Typography>
              <Typography component="p" className="info" id="skype">
                Skype: &nbsp;<span><strong>asaad.najjar.1</strong></span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
