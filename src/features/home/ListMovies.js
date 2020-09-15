import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
                        <Grid item xs={12} md={3} key={movie.imdbID}>
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

ListMovies.propTypes = {
    movie: PropTypes.object,
}

export default ListMovies;