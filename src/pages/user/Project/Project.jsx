import * as React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Typography, Grid, Box, Stack, Avatar } from '@mui/material';

import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';

import './Project.scss';

import project1 from '../../../assets/imgs/project1.jpg';
import project2 from '../../../assets/imgs/project2.jpg';
import project3 from '../../../assets/imgs/project3.jpg';
import project4 from '../../../assets/imgs/project4.jpg';
import project5 from '../../../assets/imgs/project5.jpg';
import project6 from '../../../assets/imgs/project6.jpg';
import project7 from '../../../assets/imgs/project7.jpg';
import project8 from '../../../assets/imgs/project8.jpg';
import project9 from '../../../assets/imgs/project9.jpg';

const Project = () => {
    let { project_id } = useParams();

    const projectImages = [
        {
            proPic: project1,
        },
        {
            proPic: project2,
        },
        {
            proPic: project3,
        },
        {
            proPic: project4,
        },
        {
            proPic: project5,
        },
        {
            proPic: project6,
        },
        {
            proPic: project7,
        },
        {
            proPic: project8,
        },
        {
            proPic: project9,
        },
    ];

    return (
        <div className="project">
            <TitlePage category={"category"} />
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    {projectImages.map((projectimg, index) => {
                        return (
                            <Avatar
                                key={index}
                                sx={{ width: '100%', height: '100%' }}
                                variant="square"
                                alt="Product"
                                src={projectimg.proPic}
                            />
                        )
                    })
                    }
                </Stack>
            </Box>
        </div >
    );
};

export default Project;