import { Box, FormHelperText } from '@material-ui/core'
import React from 'react'
import myImg from '../assets/my-img.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { baseAPI } from '../config'
import background from '../assets/background.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    title: {
        color: 'white',
        margin: '10px',
        alignSelf: 'flex-end',
        backgroundColor: '#000000a6'
    },
    containerImg: {
        alignSelf: 'flex-end'
    },
    myImg: {
        width: '45%',
        border: '3px solid white',
        borderRadius: '50%',
        float: 'right',
        margin: '20px',
    }
}))
export const Home = () => {
    const classes = useStyles()
    return (
        <Link to={`${baseAPI}`} className={classes.container}>
            <Box className={classes.title}>
                <h1 >PORTFOLIO: Sandra Shumanteva Kaevska</h1>
                <h2 >frontend developer</h2>
                <h3 >+ bank appriser</h3>
            </Box>
            <Box className={classes.containerImg}>
                <img className={classes.myImg} src={myImg}></img>
            </Box>
        </Link>
    )
}