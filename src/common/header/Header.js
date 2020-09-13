import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { getMoviesResult, getMoviesStatus, getMoviePage } from '../../store/selectors/searchMoviesSelectors/searchMoviesSelectors';
import { STATUS } from '../../const/status';
import { searchMovies } from '../../store/actions/searchMovies/searchMoviesActions';


const useStyles = makeStyles(theme => ({

  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },

  },
  searchVisible: {
    visibility: 'visible',
    opacity: 1,
    transition: 'visibility 1s linear 0.33s, opacity 0.33s linear'
  },
  searchInvisible: {
    visibility: 'hidden',
    opacity: 0,

    transition: 'visibility 0s linear 0.33s, opacity 0.33s linear',
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
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: "#111",
    [theme.breakpoints.up('md')]: {

      color: theme.palette.text.secondary,
    },
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  toolbar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  }
}));

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    const payload = {
      movieTitle: search,
      page: props.page === undefined ? 1 : props.page,
    }
    if (event.which === 13 && search.length > 0) {
      props.searchMovies(payload);
    }
  }

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const searchMoviesClick = () => {
    const payload = {
      movieTitle: search,
      page: props.page === undefined ? 1 : props.page,
    }
    if (search.length > 0) {
      props.searchMovies(payload);
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem><Link to="/home" className={classes.link}>Home</Link></MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>

  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <img src="https://ri.b2w.digital/img/2013/logo.png" alt="B2W Digital" width="40px" />
            <div className={`${classes.search} ${props.status === STATUS.NOT_FETCHED ? classes.searchInvisible : classes.searchVisible}`}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />


            </div>
            {
              props.status === STATUS.NOT_FETCHED ?
                null :
                <Button variant="contained"
                  color="primary"
                  disabled={search.length === 0 ? true : false}
                  className={classes.buttonSearch}
                  onClick={searchMoviesClick}>Buscar</Button>
            }

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem><Link to="/" className={classes.link}>Home</Link></MenuItem>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className={classes.link}
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: getMoviesStatus(state),
  movies: getMoviesResult(state),
  pages: getMoviePage(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (payload) => dispatch(searchMovies(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
