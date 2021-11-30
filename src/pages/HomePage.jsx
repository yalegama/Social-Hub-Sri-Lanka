import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";

const useStyles=makeStyles((theme)=>({
    title:{
        textAlign:"center"
    }
}))

function HomePage(){
    const classes=useStyles();
    return(
        <div>
            <Header/>
        </div>
    )
}

export default HomePage