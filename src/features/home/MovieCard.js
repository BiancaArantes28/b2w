import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
    },
    media: {
        height: 420,
        cursor: 'pointer'
    },
    tableTooltip: {
        fontSize: '18px'
    },
    actionTooltip: {
        width: '100%',
        textAlign: 'center'
    }
});

const renderTooltip = (movie, classes) => (
    <Fragment>
        <div>
            <img src={movie.Poster === 'N/A' ? `/assets/image-not-found.png` : movie.Poster} alt={movie.title} width="100%" />
        </div>
        <table className={classes.tableTooltip}>
            <tbody>
                <tr>
                    <td><strong>Title:</strong> {movie.Title}</td>
                </tr>
                <tr>
                    <td><strong>Year:</strong> {movie.Year}</td>
                </tr>
                <tr>
                    <td><strong>Type:</strong> {movie.Type}</td>
                </tr>
                <tr>
                    <td><strong>imdb:</strong> {movie.imdbID}</td>
                </tr>
            </tbody>
        </table>
        <div className={classes.actionTooltip}>
            <Link to={`/detail/${movie.imdbID}`}>
                <Button variant="contained" color="primary">+ Info</Button>
            </Link>

        </div>
    </Fragment>

);

const MovieCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Tooltip title={renderTooltip(props.movie, classes)} enterTouchDelay={0} interactive>
                    <CardMedia
                        className={classes.media}
                        image={props.movie.Poster === 'N/A' ? `/assets/image-not-found.png` : props.movie.Poster}
                        title={props.movie.Title}
                    />
                </Tooltip>

            </CardActionArea>
        </Card>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object,
}

export default MovieCard;
