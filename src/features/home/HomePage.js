import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

// Materil UI:
import { fade, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

// Common
import Spinner from '../../common/spinner/Spinner';
import AlertComponent from '../../common/alert/AlertComponent';

// Constants:
import { STATUS } from '../../const/status';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    subtitle: {
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    actionsButton: {
        display: "flex",
    },
    readMore: {
        flex: "1",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.25),
        },
        marginTop: 30,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',

    },
    gridButton: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    buttonSearch: {
        marginTop: 30,
    }
});

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    renderLoading(classes) {
        return (
            <Grid item md={12} xs={12}>
                <Paper className={classes.paper}>
                    <Spinner />
                </Paper>

            </Grid>
        );
    }

    renderErrorMessage() {
        return (
            <Grid item md={12} xs={12}>
                <AlertComponent
                    severity={"error"}
                    title={"Não encontrado"}
                    content={"Desculpe, não foi encontrado nenhum texto!"}
                />
            </Grid>

        );
    }

    renderTitle(title, styledClass) {
        return (
            <div>
                <Typography variant="h3">
                    {title}
                </Typography>
                <Typography variant="h6" className={styledClass}>
                    Mar 2020
                </Typography>
            </div>
        );
    }

    handleKeyUp(e) {
        if (e.which === 13) {
            console.log("aqui")
        }
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    renderBody() {
        const { classes } = this.props;
        const { search } = this.state;

        return (
            <Fragment>
                <Grid item md={11} xs={10}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Procure seu Filme"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={this.handleSearch}
                            onKeyUp={this.handleKeyUp}
                        />
                    </div>
                </Grid>
                <Grid item md={1} xs={2} className={classes.gridButton}>
                    <Button variant="contained" color="primary" disabled={search.length === 0 ? true : false} className={classes.buttonSearch}>
                        Buscar
                    </Button>
                </Grid>
            </Fragment>
        )
    }

    render() {
        let content;
        const { classes, status, text } = this.props;

        if (status === STATUS.INPROGRESS) {
            content = this.renderLoading(classes);
        } else if (status === STATUS.FETCHED && text !== undefined) {

            content = this.renderBody();
        } else {
            content = this.renderErrorMessage();
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {content}
                </Grid>

            </div>
        );
    }
}

HomePage.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(HomePage);