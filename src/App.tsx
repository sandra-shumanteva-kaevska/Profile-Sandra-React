import React from "react";
import { myTheme } from "assets/theme/myTheme";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { Home } from "./pages/Home";

const useStyles = makeStyles(() => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: "1",
        position: "relative"
    }
}));

function App () {
    const classes = useStyles();

    return (
        <ThemeProvider theme={myTheme}>
            <Navbar />
            <Container fixed className={classes.root}>
                <Home />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
