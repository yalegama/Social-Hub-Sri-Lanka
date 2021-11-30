import { AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Mail, Notifications, Search } from '@material-ui/icons';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    appBar:{
        display:"flex",
        justifyItems:'space-between'
    },
logo1:{
    color:'orange',
},
logo2:{
    display:'none',
    [theme.breakpoints.up('md')]:{
        display:'block'
    }
},
searchBox:{
    display:'flex',
    alignItems:'center'
},
inputBase:{
    backgroundColor:"white",
    borderRadius:theme.shape.borderRadius
},
icons:{
    display:"flex",
}
}))

function Header() {
    const classes=useStyles();
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
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
                    <div className={classes.searchBox}>
                        <Search/>
                        <InputBase className={classes.inputBase}/>
                    </div>
                    <div className={classes.icons}>
                        <Badge 
                        badgeContent={4}
                        color="secondary"
                        >
                        <Notifications/>
                        </Badge>
                        <Badge
                        badgeContent={21}
                        color="secondary"
                        >
                            <Mail/>
                        </Badge>
                        <Avatar src="https://avatars.githubusercontent.com/u/86607367?v=4" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
