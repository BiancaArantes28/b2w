import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import MovieScore from './MovieScore';

const styles = theme => ({
    gridTable: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    table: {
        minWidth: '100%',
    },
    tdJustify: {
        textAlign: 'justify',
    },
    body: {
        fontSize: 14,
    },
    movieScoreDiv: {
        width: '100%',
        marginTop: 30,
    },
    gridButton: {
        textAlign: 'left',
        marginTop: 30,
        paddingLeft: '0px !important'
    }
});

class MovieDetailPage extends Component {

    renderBackButton() {
        const { classes } = this.props;

        return (
            <Grid item md={12} xs={12} className={classes.gridButton}>
                <Link to="/">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ArrowBackIcon />}
                    >
                        Back
                    </Button>
                </Link>
            </Grid>
        );
    }

    renderTable() {
        const { movie, classes } = this.props;

        return (
            <table>
                <tbody>
                    <tr>
                        <td><strong>Title: </strong>{movie.Title}</td>
                    </tr>
                    <tr>
                        <td><strong>Year: </strong>{movie.Year}</td>
                    </tr>
                    <tr>
                        <td><strong>Rated: </strong>{movie.Rated}</td>
                    </tr>
                    <tr>
                        <td><strong>Released: </strong>{movie.Released}</td>
                    </tr>
                    <tr>
                        <td><strong>Genre: </strong>{movie.Genre}</td>
                    </tr>
                    <tr>
                        <td><strong>Director: </strong>{movie.Director}</td>
                    </tr>
                    <tr>
                        <td className={classes.tdJustify}><strong>Writer: </strong>{movie.Writer}</td>
                    </tr>
                    <tr>
                        <td className={classes.tdJustify}><strong>Actors: </strong>{movie.Actors}</td>
                    </tr>
                    <tr>
                        <td className={classes.tdJustify}><strong>Plot: </strong>{movie.Plot}</td>
                    </tr>
                    <tr>
                        <td><strong>Language: </strong>{movie.Language}</td>
                    </tr>
                    <tr>
                        <td><strong>Country: </strong>{movie.Country}</td>
                    </tr>
                    <tr>
                        <td><strong>Awards: </strong>{movie.Awards}</td>
                    </tr>
                    <tr>
                        <td><strong>Metascore: </strong>{movie.Metascore}</td>
                    </tr>
                    <tr>
                        <td><strong>imdbVotes: </strong>{movie.imdbVotes}</td>
                    </tr>
                    <tr>
                        <td><strong>imdbiD: </strong>{movie.imdbiD}</td>
                    </tr>
                    <tr>
                        <td><strong>Type: </strong>{movie.Type}</td>
                    </tr>
                </tbody>
            </table>
        );

    }

    render() {
        const { classes, movie } = this.props;

        return (
            <Grid container spacing={3}>
                {this.renderBackButton()}
                <div className={classes.movieScoreDiv}>
                    <MovieScore movie={movie} />
                </div>
                <Grid item md={3} xs={12} className={classes.gridTable}>
                    <img src={movie.Poster === 'N/A' ? `/assets/image-not-found.png` : movie.Poster} alt={movie.Title} width="100%" />
                </Grid>
                <Grid item md={9} xs={12} className={classes.gridTable}>
                    {this.renderTable()}
                </Grid>

                {this.renderBackButton()}
            </Grid>

        );
    }
}

MovieDetailPage.propTypes = {
    movie: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(MovieDetailPage);
