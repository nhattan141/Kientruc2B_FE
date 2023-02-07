import * as React from 'react';

import { Typography, Grid, Box } from '@mui/material';

import './FeaturedProjects.scss';

import project1 from '../../../../assets/imgs/project1.jpg';
import project2 from '../../../../assets/imgs/project2.jpg';
import project3 from '../../../../assets/imgs/project3.jpg';
import project4 from '../../../../assets/imgs/project4.jpg';
import project5 from '../../../../assets/imgs/project5.jpg';
import project6 from '../../../../assets/imgs/project6.jpg';
import project7 from '../../../../assets/imgs/project7.jpg';
import project8 from '../../../../assets/imgs/project8.jpg';
import project9 from '../../../../assets/imgs/project9.jpg';

const FeaturedProjects = () => {
    const projects = [
        {
            proPic: project1,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project2,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project3,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project4,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project5,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project6,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project7,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
    ];

    return (
        <div className="featured-projects">
            <Typography variant="h2" sx={{
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '200',
                fontSize: '38px'
            }}>
                Dự án nổi bật
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{
                    // marginLeft: '-16px',
                    marginTop: 0,
                }}>
                    {projects.map((project, index) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                md={4}
                                key={index}
                                sx={{
                                    cursor: 'pointer',
                                    "&:hover>.project-card:before": {
                                        transform: 'scale(1)'
                                    },
                                    "&:hover>.project-card:after": {
                                        transform: 'scale(1)'
                                    },
                                    "&:hover>.project-card>.project-img": {
                                        opacity: '.4'
                                    },
                                    "&:hover>.project-card>.project-body": {
                                        opacity: '1'
                                    },
                                }}
                            >
                                <div className='project-card'>
                                    <div className='project-img'>
                                        <img src={project.proPic} alt='project-pic' />
                                    </div>
                                    <div className='project-body'>
                                        <Typography variant="h4" sx={{
                                            textTransform: 'uppercase',
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '38px'
                                        }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="h6" >
                                            {project.city}
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </Box>
            <a href="/projects">Xem tất cả dự án</a>
        </div >
    )
};

export default FeaturedProjects;