import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
    scoreMovie: {
        width: '60px',
        margin: 'auto !important',
        display: 'table',
    },
    scoreMovieP: {
        fontSize: '48px',
        letterSpacing: 0,
        display: 'table-cell',
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
    },
    scoreLow: {
        border: '2px solid #C0544D',
    },
    scoreLowP: {
        color: '#C0544D',
    },
    scoreAverage: {
        border: '2px solid #DAB807',
    },
    scoreAverageP: {
        color: '#DAB807',
    },
    scoreHigh: {
        border: '2px solid #307C59',
    },
    scoreHighP: {
        color: '#307C59',
    },
    scores: {
        width: '10%',
        height: '30px',
        borderRight: '1px solid #FFFFFF',
        display: 'table',
        float: 'left',
    },
    scoresHeader: {
        width: '10%',
        display: 'table',
        float: 'left',
    },
    scoresNumber: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#979797',
        letterSpacing: 0,
    },
    scoresImg: {
        width: '10%',
        display: 'table',
        float: 'left',
        textAlign: 'center',
        minHeight: '20px',
    },
    score10: {
        border: 'none'
    },
    gridScoreAll: {
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
    },
    scoreAll: {
        height: '30px',
        backgroundImage: 'linear-gradient(90deg, #C0544D 0%, #DAB807 49%, #307C59 100%)',
        zIndex: 1,
    },
    contentOval: {
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        zIndex: 'inherit',
    },
    ovalImg: {
        width: '5px',
        height: '5px',
        zIndex: 9,
    },
    divScore: {
        width: '10%',
        float: 'left',
        height: '100px',
    },
    divAllSquare: {
        width: '90%',
        float: 'left',
    },
    divSquares: {
        width: '100%',
        float: 'left',
    },
});

class MovieScore extends Component {

    returnClassNameScore() {
        const { classes, movie: { imdbRating } } = this.props;

        if (imdbRating < 4) {
            return classes.scoreLow;
        } else if (imdbRating === 4 || imdbRating === 5) {
            return classes.scoreAverage;
        } else {
            return classes.scoreHigh;
        }
    }

    returnClassNameP() {
        const { classes, movie: { imdbRating } } = this.props;

        if (imdbRating < 4) {
            return classes.scoreLowP;
        } else if (imdbRating === 4 || imdbRating === 5) {
            return classes.scoreAverageP;
        } else {
            return classes.scoreHighP;
        }
    }

    renderNumbers(row) {
        const { classes } = this.props;

        return (
            <div key={row} className={classes.scoresHeader}>
                <div className={classes.scoresNumber}>{row}</div>
            </div>
        );
    }

    renderSquares(row) {
        const { classes } = this.props;

        return (
            <div key={row} className={`${classes.scores} ${row === 10 ? classes.score10 : ''}`}>
                <div className={classes.contentOval}>
                    <img className={classes.ovalImg} src={`/assets/oval.svg`} />
                </div>
            </div>
        );
    }

    renderTriangleImg(row) {
        const { movie, classes } = this.props;
        return (
            <div key={row} className={classes.scoresImg}>
                {
                    Math.round(movie.imdbRating) === row ?
                        <img src={`/assets/triangle.svg`} /> : null
                }

            </div>
        );
    }

    render() {
        const { classes, movie } = this.props;

        let rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push(i);
        }
        return (
            <Fragment>
                <div className={classes.divScore}>
                    <div className={`${classes.scoreMovie} ${this.returnClassNameScore()}`}>
                        <p className={`${classes.scoreMovieP} ${this.returnClassNameP()}`}>{movie.imdbRating}</p>
                    </div>
                </div>
                <div className={classes.divAllSquare}>
                    <div className={classes.divSquares}>
                        {
                            rows.map(row => {
                                return this.renderNumbers(row);
                            })
                        }
                    </div>
                    <div className={classes.divSquares}>
                        <div className={classes.scoreAll}>
                            {
                                rows.map(row => {
                                    return this.renderSquares(row);
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.divSquares}>
                        {
                            rows.map(row => {
                                return this.renderTriangleImg(row);
                            })
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MovieScore);