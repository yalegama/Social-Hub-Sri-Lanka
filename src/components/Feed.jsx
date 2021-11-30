import { makeStyles } from "@material-ui/styles";
import React from "react";
import Post from "./Post";

const useStyles=makeStyles((theme)=>({
    
}))

function Feed(){
    const classes=useStyles();
    return(
        <div> 
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed