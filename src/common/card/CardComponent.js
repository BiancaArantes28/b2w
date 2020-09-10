import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    details: {
        flex: "1",
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const CardComponent = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    {props.title}
                    {props.content}
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={props.img}
                title={props.titleImg}
            />
        </Card>
    );
}

CardComponent.propTypes = {
    content: PropTypes.object,
    img: PropTypes.string,
    title: PropTypes.object,
    titleImg: PropTypes.string,
}

export default CardComponent;