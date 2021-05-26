import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Button, IconButton, List, ListItem, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { scroller } from "react-scroll";

const useStyles = makeStyles(() => ({
    listItem: {
        float: "left",
        width: "auto"
    },
    rightLinks: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    }
}));

export const Navbar = () => {
    const classes = useStyles();

    const scrollToElement = (element: string) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuart",
            offset: -70
        });
    };

    return (
        <AppBar>
            <Toolbar>
                <IconButton title='Home' onClick={() => scrollToElement("hero")}>
                    <HomeIcon color="inherit" />
                </IconButton>
                <List>
                    <ListItem className={classes.listItem}>
                        <Button
                            onClick={() => scrollToElement("about-me")}
                        >
                            About Me
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            onClick={() => scrollToElement("project-list")}
                        >
                            My Projects
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            onClick={() => scrollToElement("footer")}
                        >
                            Contact Me
                        </Button>
                    </ListItem>
                </List>

                <Box className={classes.rightLinks}>
                    <IconButton href='https://github.com/sandra-shumanteva-kaevska?tab=repositories' title='GitHub repositories' target='blank'>
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href='https://www.linkedin.com/in/sandra-shumanteva-kaevska-816064193/' title='Linkedin' target='blank'>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
