import React, { Component, Fragment } from 'react';

import PropTypes, { object } from 'prop-types';

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
import ListMovies from './ListMovies';
import PaginationComponent from '../../common/pagination/PaginationComponent';



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
    searchVisible: {
        visibility: 'visible',
        opacity: 1,
        transitionDelay: '0s',
    },
    searchInvisible: {
        visibility: 'hidden',
        opacity: 0,

        transition: 'visibility 0s linear 0.33s, opacity 0.33s linear',
    },
    gridButton: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    buttonSearch: {
        marginTop: 30,
    },
    listMovies: {
        marginTop: 30,
    },
    listVisible: {
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 1s linear 0.33s, opacity 0.33s linear',
    },
    listHidden: {
        visibility: 'hidden',
        opacity: 0,

        transition: 'visibility 0s linear 0.33s, opacity 0.33s linear',
    },
    boxPagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
});

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            listHidden: props.status && props.status === STATUS.NOT_FETCHED ? true : false,
            searchHidden: props.status && props.status === STATUS.NOT_FETCHED ? false : true,
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.searchMoviesClick = this.searchMoviesClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.changePage = this.changePage.bind(this);
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

    searchMoviesClick() {
        const { search } = this.state;

        const payload = {
            movieTitle: search,
            page: 1,
        };
        this.setState({ listHidden: false, searchHidden: true })
        this.props.searchMovies(payload);
    }

    handleKeyUp(e) {
        const { search } = this.state;

        const payload = {
            movieTitle: search,
            page: 1,
        };

        if (e.which === 13 && search.length > 0) {
            this.props.searchMovies(payload);
            this.setState({ listHidden: false, searchHidden: true })
        }
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    calculateTotalResults() {
        const { totalResults } = this.props;

        return Math.ceil(totalResults / 10);
    }

    changePage(page) {
        const { search } = this.props;

        const payload = {
            movieTitle: search,
            page,
        }

        this.props.searchMovies(payload);
    }

    renderBody() {
        const { classes, movies, status } = this.props;
        const { search, searchHidden } = this.state;

        return (
            <Grid container spacing={3} className={searchHidden ? classes.searchInvisible : classes.searchVisible}>
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
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={search.length === 0 ? true : false}
                        className={classes.buttonSearch}
                        onClick={this.searchMoviesClick}
                    >
                        Buscar
                    </Button>
                </Grid>
            </Grid>


        )
    }

    renderListMovies() {
        const { classes, movies, page, status } = this.props;
        const { listHidden } = this.state;

        return (
            <Grid container spacing={3} className={listHidden ? classes.listHidden : classes.listVisible}>
                <ListMovies movies={movies} />
                <div className={classes.boxPagination}>
                    <PaginationComponent total={this.calculateTotalResults()} changePage={this.changePage} page={page} />
                </div>
            </Grid>
        );
    }

    render() {
        let content;
        const { classes, status, movies } = this.props;

        /* if (status === STATUS.INPROGRESS) {
            content = this.renderLoading(classes);
        } else if (status === STATUS.NOT_FETCHED) {

            content = this.renderBody();
        } else if (status === STATUS.FETCHED && movies.length > 0) {
            content = this.renderListMovies()
        } else {
            content = this.renderErrorMessage();
        } */

        if (status === STATUS.INPROGRESS) {
            return this.renderLoading(classes);
        }

        return (
            <div className={classes.root}>
                {this.renderBody()}
                {
                    movies !== undefined ?
                        this.renderListMovies() :
                        this.renderErrorMessage()
                }
            </div>
        );
    }
}

HomePage.propTypes = {
    movies: PropTypes.arrayOf(object).isRequired,
    totalResults: PropTypes.number.isRequired,
    searchMovies: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(HomePage);