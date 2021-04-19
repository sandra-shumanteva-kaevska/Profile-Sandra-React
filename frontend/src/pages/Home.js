import { Box } from '@material-ui/core'
import React from 'react'
import myImg from '../assets/my-img.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'white'
    }

}))
export const Home = () => {
    const classes = useStyles()
    return (
        <Box>
            <h1 className={classes.title}>PORTFOLIO: Sandra Shumanteva Kaevska</h1>
            <h2 className={classes.title}>frontend developer</h2>
            <h3 className={classes.title}>+ bank appriser</h3>
        </Box>
    )
}