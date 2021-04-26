import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'

import { ProjectCard } from '../components/ProjectCard'
import { baseAPI } from '../config'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexGrow: 1,
        background: 'rgb(165,158,205)',
        background: 'linear-gradient(90deg, rgba(165,158,205,1) 0%, rgba(23,213,9,1) 100%)'
    },
    projectsList: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}))

export const Projects = ({ showLoader }) => {
    const [projetcs, setProjects] = useState([])
    const [error, setError] = useState('')
    const classes = useStyles()

    useEffect(() => {
        showLoader(true)
        fetch(`${baseAPI}/projects`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(json => setProjects(json))
            .catch((error) => {
                setError('Projects were not found')
            })
            .finally(() => showLoader(false))
    }, [])

    return (
        <Box className={classes.container}>
            <Box className={classes.projectsList}>
                {projetcs.map(project =>
                    <ProjectCard key={project._id} {...project} />
                )}
            </Box>
        </Box>
    )
}