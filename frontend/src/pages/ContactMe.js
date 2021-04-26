import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

import mailImg from '../assets/images/mailImg.png'

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(90deg, rgba(165,158,205,1) 0%, rgba(23,213,9,1) 100%)',
        display: ' flex',
        justifyContent: 'center',
        flexGrow: 1
    },
    paperStyle: {
        margin: '20px',
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    imgStyle: {
        width: '50%',
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mailStyle: {
        fontSize: '30px',
        '@media (max-width: 480px)': {
            fontSize: '15px',
        },
        '@media (min-width: 481px) and (max-width: 780px)': {
            fontSize: '20px',
        }
    }
}))

export const ContactMe = () => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Paper elevation={3} className={classes.paperStyle}>
                <Box className={classes.contactContainer}>
                    <img className={classes.imgStyle} alt='woman with letters' src={mailImg} />
                    <h2> Please do not hesitate to contact me for further information on this mail: </h2>
                    <a className={classes.mailStyle} href='mailto:sandra@shumantevi.mk'>sandra@shumantevi.mk</a>
                </Box>
            </Paper>
        </Box>
    )
}