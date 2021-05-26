import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import { SplitButton } from "../SplitButton";
import { Project } from "assets/data/projects";

const useStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    media: {
        height: "200px",
        width: "100%"
    },
    chipStyle: {
        margin: "3px"
    },
    cardContentStyle: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    cardActionsStyle: {
        justifyContent: "space-between"
    }
});

const heightlightTech = ["React", "Redux", "ReactNative", "Node.js"];

interface IProps {
    project: Project
}

export const ProjectCard = ({ project }: IProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={project.image}
                title="picture of project" />
            <CardContent className={classes.cardContentStyle}>
                <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                </Typography>
                <Box flex={1}/>
                <Box mt={2}>
                    {project.tech.map((t: any) => <Chip key={t} size="small" label={t} className={classes.chipStyle} color={heightlightTech.includes(t) ? "primary" : "default"} />)}
                </Box>
            </CardContent>
            <CardActions className={classes.cardActionsStyle}>
                <Button href={project.github} target="blank" variant="contained" color="primary" size='small'>GitHub</Button>
                <SplitButton preview={project.preview} />
            </CardActions>
        </Card>
    );
};
