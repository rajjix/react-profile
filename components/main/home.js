import React from 'react';
import { Card, CardActionArea, Typography, CardContent, Grid } from '@material-ui/core';
import Menu from '../AppBar/menu';

import './home.css';

export default () => {
  return(
    <div id="main-body">
      <Menu/>
      <div className="card">
      <img id="avatar" src="https://orig00.deviantart.net/6777/f/2011/053/4/8/my_personal_avatar_by_lucentyami-d3a5i7p.png" alt="avatar" />
      <Card id="content">
        <CardActionArea>
          <CardContent className="content">
            <Typography variant="h1" className="typewriter" id="title">
              Web Developer...
            </Typography>
            <br /><br />
            <hr/>
            <br /><br />
            <Typography variant="h4" id="skills">
              Python | Django | Bootstrap | JavaScript | React | SQL | HTML/CSS
            </Typography>
            <br />
            <Grid container>
              <Grid item xs={4}>
                <a href="https://github.com/rajjix" rel="noopener noreferrer" target="_blank">
                  <img className="skill-icon" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="gituhb" title="github" />
                </a>
              </Grid>
              <Grid item xs={4}>
                <a href="https://www.freecodecamp.org/rajjix" rel="noopener noreferrer" target="_blank">
                  <img className="skill-icon" src="https://cdn.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg" alt="FCC" title="Freecodecamp"/>
                </a>
              </Grid>
              <Grid item xs={4}>
                <a href="https://t.me/rajjix" rel="noopener noreferrer" target="_blank">
                  <img className="skill-icon" src="http://pluspng.com/img-png/telegram-logo-png-open-2000.png" alt="Telegram" title="Telegram" />
                </a>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </div>
  );
}

