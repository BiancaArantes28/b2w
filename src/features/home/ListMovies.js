import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ListMovies = (props) => {
    const classes = useStyles();

    return (
        <Fragment>
            {
                props.movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.imdbID}>
                            <div className={classes.root}>
                                <MovieCard
                                    movie={movie}
                                />
                            </div>

                        </Grid>
                    )
                })
            }
        </Fragment>
    );
}

export default ListMovies;