import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export const About = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    I'm a frontend developer with a Bank Appraiser background.
                    I recently finished a 6 months bootcamp for Frontend Developer. On the bootcamp I learned about HTML, CSS, JS, React, React Native and NodeJS.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    I'm friendly, communicative and positive person, curious about new stuff and learning new things.
                    I want to share knowledge with my collages and have a fun time working with them.
                </Typography>
            </CardContent>
        </Card>
    );
};
