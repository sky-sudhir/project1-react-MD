import React from 'react'
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import {AppBar,Toolbar,Typography} from '@mui/material'
function NavBar() {
  return (
    <div>
        <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <div className="myfont">MyMovies</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar