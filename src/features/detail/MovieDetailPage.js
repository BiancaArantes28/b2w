import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MovieScore from './MovieScore';

const styles = theme => ({
    gridTable: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    table: {
        minWidth: '100%',
    },
    head: {
        backgroundColor: theme.palette.common.black,

    },
    headTableCell: {
        color: '#ffffff !important',
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
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell className={classes.headTableCell} align="left">Title</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Year</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Rated</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Released</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Director</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Writer</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Actors</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Plot</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>

                    </TableRow>
                </TableBody>
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell className={classes.headTableCell} align="left">Language</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Country</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Awards</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Metascore</TableCell>
                        <TableCell className={classes.headTableCell} align="left">imdbVotes</TableCell>
                        <TableCell className={classes.headTableCell} align="left">imdbiD</TableCell>
                        <TableCell className={classes.headTableCell} align="left">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>

                        <TableCell align="lett">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                        <TableCell align="left">Teste</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
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
                <div className={classes.movieScoreDiv}>
                    <MovieScore movie={movie} />
                </div>
                <Grid item md={12} xs={12} className={classes.gridTable}>
                    {this.renderTable()}
                </Grid>

                {this.renderBackButton()}
            </Grid>

        );
    }
}

export default withStyles(styles, { withTheme: true })(MovieDetailPage);
