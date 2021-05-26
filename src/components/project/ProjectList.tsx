import React from "react";
import { Grid } from "@material-ui/core";

import { ProjectCard } from "./ProjectCard";
import { Project } from "assets/data/projects";

interface IProps {
    projects: Project[]
}

export const ProjectList = ({ projects }: IProps) => {
    return (
        <Grid container spacing={3}>
            {projects.map((project) =>
                <Grid item xs={12} sm={6} md={4} lg={3} key={project._id}>
                    <ProjectCard key={project._id} project={project} />
                </Grid>
            )}
        </Grid>
    );
};
