import React from "react";
import { Box, Container, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#dcddde"
    },
    topHolder: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    bottomHolder: {
        background: "#363636a6",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} id='footer'>
            <Box className={classes.topHolder}>
                <Container fixed>
                    <Typography variant="h6" align="center">
                        Please do not hesitate to contact me for further information <Link href="mailto:sandra@shumantevi.mk">sandra@shumantevi.mk</Link>
                    </Typography>
                </Container>
            </Box>
            <Box className={classes.bottomHolder}>
                <Container fixed>
                    <Typography variant="subtitle2" align="center">
                        Sandra Shumanteva Kaevska ©2021
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};
