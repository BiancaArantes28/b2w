import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

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

        return (
            <Grid container spacing={3}>
                {this.renderBackButton()}
                <Grid item md={12} xs={12}>
                    <h1>Movie Detail Page</h1>
                </Grid>
                {this.renderBackButton()}
            </Grid>

        );
    }
}

export default withStyles(styles, { withTheme: true })(MovieDetailPage);
