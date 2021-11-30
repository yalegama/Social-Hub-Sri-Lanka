import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles((theme)=>({
    image:{
        height:200,
        width:150
    },
    containerGrid:{
        display:'flex',
        flexDirection:'raw'
    },
}));

function Post() {
    const classes=useStyles();
    return (
        <div>
            <Grid className={classes.firstGrid}>
            <Card className={classes.card}>
                <Grid className={classes.containerGrid}>
                <CardMedia md={5}
                className={classes.image}
                component="img"
                image="https://pbs.twimg.com/profile_images/541867053351583744/rcxem8NU_400x400.jpeg"
                />
                <CardContent md={7}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda quaerat esse dolores, autem officiis id numquam asperiores sapiente nobis eaque pariatur architecto maxime quidem, ut repudiandae magni provident et?
                    </Typography>
                </CardContent>
                </Grid>
            </Card>
            </Grid>
        </div>
    )
}

export default Post
