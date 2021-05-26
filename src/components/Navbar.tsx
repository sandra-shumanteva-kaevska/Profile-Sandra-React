import React from "react";
import { makeStyles, AppBar, Box, Button, IconButton, List, ListItem, Toolbar, useTheme, useMediaQuery } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { scroller } from "react-scroll";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";

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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollToElementAndCloseMenu = (element: string) => {
        setAnchorEl(null);
        scrollToElement(element);
    };

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
                {matches
                    ? <>
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
                    </>
                    : <>
                        <IconButton edge="start" onClick={handleClick} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={() => scrollToElementAndCloseMenu("about-me")}>About Me</MenuItem>
                            <MenuItem onClick={() => scrollToElementAndCloseMenu("project-list")}>My Projects</MenuItem>
                            <MenuItem onClick={() => scrollToElementAndCloseMenu("footer")}>Contact Me</MenuItem>
                        </Menu>
                    </>
                }

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
