import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#364450',
            // dark: will be calculated from palette.primary.main,
        },
        secondary: {
            main: '#49c5b1'
        },
        text: {
            primary: "#000000",
            secondary: "#ffffff",
        }
    },
    status: {
        danger: 'red',
    },
    typography: {
        fontFamily: [
            "Roboto Condensed",
            "sans-serif",
        ].join(','),
        h2: {
            fontFamily: [
                "Rajdhani",
                "sans-serif"
            ].join(','),
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: '60px',
        },
        h3: {
            fontFamily: [
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif"
            ].join(','),
            fontSize: "1.5rem",
            fontWeight: "400",
            lineHeight: "1.334",
            letterSpacing: "0em"
        },
        h6: {
            fontFamily: [
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif"
            ].join(','),
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.75",
            letterSpacing: "0.00938em"
        },
        body1: {
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.00938em"
        }
    },
});

export default theme;