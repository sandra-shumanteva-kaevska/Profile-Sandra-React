import React from "react";
import { Hero } from "components/Hero";
import { About } from "components/About";
import { ProjectList } from "components/project/ProjectList";
import { data } from "assets/data/projects";
import { Box, Typography } from "@material-ui/core";

export const Home = () => {
    return (
        <>
            <Hero />

            <Box my={3} id="about-me">
                <Typography variant="h3" paragraph>About Me</Typography>
                <About />
            </Box>

            <Box my={3} id="project-list">
                <Typography variant="h3" paragraph>My Projects</Typography>
                <ProjectList projects={data} />
            </Box>
        </>
    );
};
