import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

import god from '../assets/images/god.jfif'
import junior from '../assets/images/junior.jpeg'
import whileImg from '../assets/images/whileImg.jpg'
import working from '../assets/images/working.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    container: {
        height: '100',
        background: 'rgb(165,158,205)',
        background: 'linear-gradient(90deg, rgba(165,158,205,1) 0%, rgba(23,213,9,1) 100%)'
    },
    paperStyle: {
        margin: '20px',
        padding: '10px',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    pGreen: {
        backgroundColor: '#54e456',
        alignSelf: 'center'
    },
    imgContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    imgStyle: {
        width: '30%',
        margin: '10px',
        flex: '1 0 21%',
    },
    img: {
        width: '100%'
    }
}))
export const AboutMe = () => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Box className={classes.root}>
                <Paper elevation={3} className={classes.paperStyle}>
                    <p> I'm a frontend developer with a Bank Appraiser background. I have worked for the past 13 years as an Appraiser (and Economist), so I believe my experience from working in a bank allows me to transfer some of my skills.
                    For example, I know how to be responsible for my own work and do things quality and by the low.
                    I learned how to handle different situations. Sometimes I needed to work in teams and individually.
                    I have had cases that make me see opportunities rather than problems.
                </p>
                    <p>I decided to change my career to Software Development because I realized how powerful programming is, it allows me to be creative, I love being able to build anything through code.
                    That's why I enrolled in the Frontend Development Bootcamp at Technigo (a tech school based in Stockholm) which consists of a 24-week fast-paced program focused
                    on JavaScript (ES6), React.js, React Native, Redux, HTML5, CSS, and server-side programming with Node.js.
                    I have weekly projects covering everything from the basics of programming to structuring web projects in the latest technologies.
                    I worked with Agile methodology with weekly sprints planning, check-ins, demos, and retrospectives.
                    Mob-programming and pair-programming were a significant part of the education.
                   </p>
                    <p>I'm enthusiastic, eager to continue learning, take on challenges, work with problem-solving and design, to create meaningful products that people will love and it will make their lives easier.
                    Please don't hesitate to contact me for further information. I look forward to hearing from you soon.
                </p>
                    <p className={classes.pGreen}>Some funny facts for junior developer: </p>
                    <Box className={classes.imgContainer}>
                        <Box className={classes.imgStyle}>
                            <img src={god} className={classes.img} />
                        </Box>
                        <Box className={classes.imgStyle}>
                            <img src={junior} className={classes.img} />
                        </Box>
                        <Box className={classes.imgStyle}>
                            <img src={whileImg} className={classes.img} />
                        </Box>
                        <Box className={classes.imgStyle}>
                            <img src={working} className={classes.img} />
                        </Box>
                    </Box>
                </Paper>
            </Box>

        </Box>
    )
}