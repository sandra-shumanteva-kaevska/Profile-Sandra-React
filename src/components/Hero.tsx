import React from "react";
import { Box, Typography } from "@material-ui/core";
import myImg from "../assets/my-img.jpg";
import { makeStyles } from "@material-ui/core/styles";

import background from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "65px"
    },
    title: {
        color: "white",
        margin: "10px",
        alignSelf: "center",
        backgroundColor: "#000000a6"
    },
    containerImg: {
        alignSelf: "center",
        width: "100%"
    },
    myImg: {
        maxWidth: "350px",
        width: "60%",
        border: "3px solid #31afd8",
        borderRadius: "50%",
        float: "right",
        margin: "20px"
    }
}));
export const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} id="hero">
            <Box className={classes.title}>
                <Typography variant="h4" paragraph>PORTFOLIO: Sandra Shumanteva Kaevska</Typography>
                <Typography variant="h5" paragraph>frontend developer</Typography>
                <Typography variant="h5" paragraph>+ bank appriser</Typography>
            </Box>
            <Box className={classes.containerImg}>
                <img className={classes.myImg} src={myImg} alt="my-profile"></img>
            </Box>
        </Box>
    );
};
