import { Component } from 'React';
import './App.css';
import AppBar, { IconButton, Typography } from '@material-ui/core';


class App extends Component {
  state = {

  }

  render() {
    return(
      <div>

        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>

      </div>
    )
  }
} 

export default App;
