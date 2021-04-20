import { Box, FormHelperText } from '@material-ui/core'
import React from 'react'
import myImg from '../assets/my-img.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {


    },
    title: {
        color: 'white',
        margin: '10px',
        float: 'left',
        backgroundColor: '#000000a6'
    },
    myImg: {
        width: '15%',
        border: '3px solid white',
        borderRadius: '50%',
        float: 'right',
        margin: '20px',
    }

}))
export const Home = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box className={classes.title}>
                <h1 >PORTFOLIO: Sandra Shumanteva Kaevska</h1>
                <h2 >frontend developer</h2>
                <h3 >+ bank appriser</h3>
            </Box>
            <Box>
                <img className={classes.myImg} src={myImg}></img>
            </Box>
        </Box>
    )
}