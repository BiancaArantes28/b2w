import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Materil UI:
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    }
});

class HomePage extends Component {

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

    renderBody() {
        const { text } = this.props;
        return (
            <Typography>
                {text}
            </Typography>
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
                    <Grid item md={12} xs={12}>
                        <Typography>
                            Welcome
                        </Typography>
                    </Grid>
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