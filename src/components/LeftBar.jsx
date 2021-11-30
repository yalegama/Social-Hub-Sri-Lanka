import { Typography } from "@material-ui/core";
import { ChildFriendly, Home, LocalDiningOutlined, Mail, MobileFriendly, Notifications, Web } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles=makeStyles((theme)=>({
    leftBar:{
        backgroundColor:'#00008B',
        display:'flex',
        flexDirection:'column',
        height:"100vh",
    },
    container:{
        display:"flex",
        paddingTop:50,
        width:'auto',
        marginLeft:40,
    },
    leftBarIcon:{
        color:'white',
        cursor:'pointer'
    },
    text:{
        color:"#ffffff",
        marginLeft:30,
        cursor:'pointer',
        display:'block',
    }
}))

function LeftBar(){
    const classes=useStyles();
    return(
        <div className={classes.leftBar}>
            <div className={classes.container}>
            <Home className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Home
            </Typography>
            </div>
            
            <div className={classes.container}>
            <ChildFriendly className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Friends
            </Typography>
            </div>

            <div className={classes.container}>
            <Notifications className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Notifications
            </Typography>
            </div>

            <div className={classes.container}>
            <Mail className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Messages
            </Typography>
            </div>

            <div className={classes.container}>
            <Web className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Website
            </Typography>
            </div>

            <div className={classes.container}>
            <MobileFriendly className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Mobile
            </Typography>
            </div>

            <div className={classes.container}>
            <ChildFriendly className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Friends
            </Typography>
            </div>

            <div className={classes.container}>
            <ChildFriendly className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Friends
            </Typography>
            </div>

            <div className={classes.container}>
            <LocalDiningOutlined className={classes.leftBarIcon}/>
            <Typography 
            className={classes.text}
            variant="h6"
            >
                Logout
            </Typography>
            </div>

        </div>
    )
}

export default LeftBar