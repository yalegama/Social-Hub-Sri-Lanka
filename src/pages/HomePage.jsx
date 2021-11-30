import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:64
    },
    title:{
        textAlign:"center"
    },
    grid3:{
        backgroundColor:"red",
        [theme.breakpoints.down('md')]:{
            backgroundColor:'blue'
        },
        display:'none',
        [theme.breakpoints.up('md')]:{
            display:'none'
        }
    },

}))

function HomePage(){
    const classes=useStyles();
    return(
        <div>
            <Header/>
            <Grid container className={classes.container}>
                <Grid item md={2} xs={3}> <LeftBar/> </Grid>
                <Grid item md={10} xs={7}> <Feed/> </Grid>
                <Grid item  xs={3}>  </Grid>
            </Grid>
        </div>
    )
}

export default HomePage