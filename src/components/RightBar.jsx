import React from "react";
import { Avatar } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    avatarGroup:{
    }
}))

function RightBar(){
    const classes=useStyles()
    return(
        <div> 
            <div className={CallMissedSharp.avatarGroup}>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            </div>
        </div>
    )
}

export default RightBar