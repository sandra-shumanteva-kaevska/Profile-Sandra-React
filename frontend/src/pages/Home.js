import { Box } from '@material-ui/core'
import React from 'react'
import myImg from '../assets/my-img.jpg'
import { makeStyles } from '@material-ui/core/styles'

import background from '../assets/background.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexGrow: 1
    },
    title: {
        color: 'white',
        margin: '10px',
        alignSelf: 'center',
        backgroundColor: '#000000a6'
    },
    containerImg: {
        alignSelf: 'center',
        width: "100%"
    },
    myImg: {
        maxWidth: "350px",
        width: '60%',
        border: '3px solid #f90892',
        borderRadius: '50%',
        float: 'right',
        margin: '20px',
    }
}))
export const Home = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Box className={classes.title}>
                <h1 >PORTFOLIO: Sandra Shumanteva Kaevska</h1>
                <h2 >frontend developer</h2>
                <h3 >+ bank appriser</h3>
            </Box>
            <Box className={classes.containerImg}>
                <img className={classes.myImg} src={myImg} alt="my-profile"></img>
            </Box>
        </Box>
    )
}