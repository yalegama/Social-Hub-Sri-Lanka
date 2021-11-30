import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles=makeStyles((theme)=>({
    logo:{
        color:'orange'
    },
}))

function Header(){
    const classes=useStyles();
    return<AppBar>
        <Toolbar>
            <Typography
            className={classes.logo}
            variant="h4"
            >
                Social Hub
            </Typography>
            <Typography 
            className={classes.logo2}
            variant="h5"
            >
                Sri Lanka
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header