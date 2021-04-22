import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton, Box } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'
import InfoIcon from '@material-ui/icons/Info'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#f90892'
    },
    toolbar: {
        display: 'block'
    },
    navLeft: {
        float: 'left'
    },
    navRight: {
        float: 'right'
    },
    icon: {
        color: 'white',
        fontSize: 40
    }
}))

export const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.navLeft}>
                        <IconButton href='https://github.com/sandra-shumanteva-kaevska?tab=repositories' title='GitHub repositories' target='blank'>
                            <GitHubIcon className={classes.icon} />
                        </IconButton>

                        <IconButton href='https://www.linkedin.com/in/sandra-shumanteva-kaevska-816064193/' title='Linkedin' target='blank'>
                            <LinkedInIcon className={classes.icon} />
                        </IconButton>
                    </Box>
                    <Box className={classes.navRight}>
                        <Link to={`/`}>
                            <IconButton title='Home' >
                                <HomeIcon className={classes.icon} />
                            </IconButton>
                        </Link>

                        <Link to={`/projects`}>
                            <IconButton title='My Projects' >
                                <AssignmentIcon className={classes.icon} />
                            </IconButton>
                        </Link>

                        <IconButton title='About Me' >
                            <InfoIcon className={classes.icon} />
                        </IconButton>

                        <IconButton title='Contact Me' >
                            <ContactMailIcon className={classes.icon} />
                        </IconButton>
                    </Box>
                </Toolbar>

            </AppBar>
        </div>
    );
}