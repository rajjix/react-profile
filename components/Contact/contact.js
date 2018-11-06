import React from 'react';
import { Card, Grid, CardActionArea, CardContent, Typography} from '@material-ui/core';
import './contact.css';
import Menu from '../AppBar/menu';

export default () => {
  return(
    <div id="main-body">
      <Menu />
      <Grid container id="container-grid">
        <Grid item xs={12} sm={6}>
          <Card id="contact-card-left">
            <CardActionArea>
              <CardContent style={{textAlign:"center"}}>
                <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="Avatar" id="contact-avatar"/>
                <Typography gutterBottom variant="h5" component="h2" id="namee">
                  Asaad Najjar
                </Typography>
                <Typography component="p" id="description">
                  Hi my name is Asaad, and i'm a 25 year old freelancer from Lebanon.<br />
                  I'm primarly a backend developer, but i do have some experience 
                  with frontend development with languages like html/css and javascript, also i use react as a framework.
                  On the backend i use python with django and flask, primarly django and DRF.
                  I also have good administration and linux skills, my favorite distros are Debian and fedora.
                  My english is fluent and my favorite text editor is vim.
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
    </div>
  );
}
