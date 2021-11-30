import { AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Mail, Notifications, Search } from '@material-ui/icons';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    toolBar:{
        justifyContent:'space-between',
        backgroundColor:"#00008B"
    },
    logo:{
        display:'flex',
        alignItems:'center'
    },
logo1:{
    color:'orange',
},
logo2:{
    display:'none',
    marginLeft:5,
    [theme.breakpoints.up('md')]:{
        display:'block'
    }
},
searchBox:{
    display:'flex',
    alignItems:'center'
},
searchIcon:{
    width:50,

},
inputBase:{
    backgroundColor:"white",
    borderRadius:theme.shape.borderRadius,
    width:theme.spacing(100),
    [theme.breakpoints.down('md')]:{
        width:theme.spacing(50)
    },
    [theme.breakpoints.down('xs')]:{
        display:"none"
    }
},
icons:{
    display:"flex",
    alignItems:'center',
    cursor:"pointer"
},
leftIcons:{
    marginLeft:10
}
}))

function Header() {
    const classes=useStyles();
    return (
        <div>
            <AppBar >
                <Toolbar className={classes.toolBar}>
                    <div className={classes.logo}>
                    <Typography
                    className={classes.logo1}
                    variant="h4"
                    >
                        Social Hub
                    </Typography>
                    <Typography
                    className={classes.logo2}
                    variant="h6"
                    >
                        Sri Lanka
                    </Typography>
                    </div>
                    <div className={classes.searchBox}>
                        <Search className={classes.searchIcon}/>
                        <InputBase className={classes.inputBase}/>
                    </div>
                    <div className={classes.icons}>
                        <Badge 
                        className={classes.leftIcons}
                        badgeContent={4}
                        color="secondary"
                        >
                        <Notifications/>
                        </Badge >
                        <Badge
                        className={classes.leftIcons}
                        badgeContent={21}
                        color="secondary"
                        >
                            <Mail/>
                        </Badge>
                        <Avatar 
                        className={classes.leftIcons}
                        src="https://avatars.githubusercontent.com/u/86607367?v=4" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
