import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

import { baseAPI } from '../config'
import { SplitButton } from '../components/SplitButton'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '@media (max-width: 480px)': {
            flex: '1 0 100%',
        },
        '@media (min-width: 481px) and (max-width: 780px)': {
            flex: '1 0 50%',
        },
        '@media (min-width: 781px) and (max-width: 1300px)': {
            flex: '1 0 33%',
        },
        '@media (min-width: 1300px)': {
            flex: '1 0 25%',
        }
    },
    cardContainer: {
        padding: '10px',
        height: '100%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    media: {
        height: '200px',
        width: '100%',
    },
    techStyle: {
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chipStyle: {
        margin: '3px'
    },
    buttonPurple: {
        backgroundColor: '#9c27b0',
        color: 'white',
        '&:hover': {
            backgroundColor: '#7b1fa2'
        }
    },
    cardActionsStyle: {
        flex: 1,
        alignItems: 'flex-end',
    }
})

const heightlightTech = ["React", "Redux", 'ReactNative', 'Node.js']

export const ProjectCard = (project) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.cardContainer}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`${baseAPI}${project.image}`}
                            title='picture of project'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {project.title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {project.description}
                            </Typography>
                            <Box className={classes.techStyle}>
                                {project.tech.map(i => <React.Fragment key={i} >
                                    {heightlightTech.includes(i) ?
                                        <Chip size='small' color='secondary' label={i} className={classes.chipStyle} />
                                        : <Chip size='small' label={i} className={classes.chipStyle} />
                                    }
                                </React.Fragment>
                                )}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActionsStyle}>
                        <Button className={classes.buttonPurple} href={project.github} target='blank'> GitHub</Button>
                        <SplitButton preview={project.preview} />
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}