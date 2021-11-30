import { Button, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cupiditate et veniam. Ab quod aperiam odio asperiores tempora dicta esse labore omnis. Quae totam pariatur quo, itaque esse eaque nostrum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero nisi placeat soluta dolores. At amet magni perspiciatis cumque asperiores dolorem. Quam corporis praesentium obcaecati error ea, eos ab vero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis mollitia placeat officia necessitatibus quos ducimus, accusantium error velit beatae deserunt cum, quidem saepe corporis quis at praesentium! Cupiditate, repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur voluptatem veniam fugiat, delectus rerum nulla repellat eligendi dolorem debitis? Magnam quis suscipit, hic in rem neque provident fugit a?
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    >Read More</Button>
                </CardContent>
                </Grid>
            </Card>
            </Grid>
        </div>
    )
}

export default Post
