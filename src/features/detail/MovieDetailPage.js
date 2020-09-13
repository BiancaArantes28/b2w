import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import MovieScore from './MovieScore';

const styles = theme => ({
    gridButton: {
        textAlign: 'left',
        marginTop: 30
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

    render() {
        const { classes } = this.props;
        const movie = {
            imdbRating: 8,
        }
        return (
            <Grid container spacing={3}>
                {this.renderBackButton()}
                <MovieScore movie={movie} />
                {this.renderBackButton()}
            </Grid>

        );
    }
}

export default withStyles(styles, { withTheme: true })(MovieDetailPage);
