import React from 'react';
import { Card, Grid, CardActionArea, CardContent, Typography} from '@material-ui/core';

const styles = {
  contactGrid: {
    width: '90%',
    margin: 'auto',
    marginTop: '5vh',
    marginBottom: '100px',
    textAlign: 'center'
  },
  contactCard: {
    border: '1.3px solid green',
    borderRadius: '5%',
    background: '#ccc'
  },
  contactAvatar: {
    width: '40%',
    borderRadius: '40%',
    boxShadow: '0px 0px 40px purple, 0px 0px 40px purple, 0px 0px 5px purple',
    marginTop: '2vh',
    marginBottom: '5vh'
  },
  name: {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: '650',
    fontSize: '2.7em'
  },
  asaadDescription: {
    textAlign: 'justify',
    fontFamily: "'Indie Flower', cursive",
    fontSize: '1.4em',
    fontWeight: '600',
  },
  email: {
    fontSize: '18px',
  },
  phoneNumber: {
    paddingTop: '6vh',
    fontSize: '20px',
  },
  skype: {
    fontSize: '20px',
  }
}

export default () => {
  return(
      <Grid container style={styles.contactGrid} spacing={16}>
        <Grid item xs={12} sm={6}>
          <Card style={styles.contactCard}>
            <CardActionArea>
              <CardContent>
                <img src="https://praveenmp.github.io/avatar2.jpg" alt="Avatar" style={styles.contactAvatar}/>
                <Typography gutterBottom variant="h5" component="h2" style={styles.name}>
                  Asaad Najjar
                </Typography>
                <Typography component="p" style={styles.asaadDescription}>
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
          <Card style={styles.contactCard}>
            <CardActionArea>
              <CardContent >
                <Typography gutterBottom variant="h3">
                  Contact Me
                </Typography>
                <hr style={{width:"60%", borderTop:" 3px dashed black"}}/>
                <Typography component="p" className="info" style={styles.phoneNumber}>
                  Phone: <br /><span><strong>+380730608247</strong></span><br />
                </Typography>
                <hr style={{width:"70%", margin:"2em auto"}}/>
                <Typography component="p" className="info" style={styles.email}> 
                  Email:<br /><span><strong>rajjix.dev.1992@hotmail.com</strong></span><br />
                </Typography>
                <hr style={{width:"70%", margin:"2em auto"}}/>
                <Typography component="p" className="info" style={styles.skype}>
                  Skype: <br /><span><strong>asaad.najjar.1</strong></span>
                </Typography>
                <br /><br />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

  );
}
