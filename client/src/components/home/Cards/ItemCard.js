import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    lists: {
        margin: '7px auto',
        display: 'table'
    },
    title: {
        fontSize: 14,
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

function Images (props) {
    const classes = useStyles();
    const images = props.imageData
    const click = _ => {
        console.log(props.imageData)
    }

    if (images.length > 0) {
        return (
            <CardMedia
                onClick={click}
                className={classes.media}
                image="https://cdn-asset.jawapos.com/wp-content/uploads/2019/09/macet-osowilangun-khusaini-640x446.jpg"
                title="Images SS"
            />
        )   
    } else {
        return ''
    }
}

function ItemCard () {
    const classes = useStyles();

    const [img, setImg] = useState([{img: ''}]);
    const [username, setUsername] = useState('Audi');
    const [date, setDate] = useState('2019 06 12');

    return (
        <div className={classes.lists}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        SS
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />

                <Images imageData={img}/>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>                    
            </Card>
        </div>
    );
}

export default ItemCard