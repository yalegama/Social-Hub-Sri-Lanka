import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:70
    },
    title:{
        textAlign:"center"
    },

}))

function HomePage(){
    const classes=useStyles();
    return(
        <div>
            <Header/>
            <Grid container className={classes.container}>
                <Grid item md={3} xs={4}> <LeftBar/> </Grid>
                <Grid item md={5} xs={7}> <Feed/> </Grid>
                <Grid item md={4} xs={1}> <RightBar/> </Grid>
            </Grid>
        </div>
    )
}

export default HomePage