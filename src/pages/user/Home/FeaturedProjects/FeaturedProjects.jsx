import * as React from 'react';

import { Typography, Grid, Skeleton } from '@mui/material';

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
            img: project1,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project2,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project3,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project4,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project5,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project6,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project7,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            img: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
    ];

    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => { setLoading(false) }, 3000);
    }, []);

    return (
        <div className="featured-projects">
            <Typography variant="h3" sx={{ textTransform: 'uppercase' }}>
                Dự án nổi bật
            </Typography>
            <Grid container spacing={2} sx={{ margin: 0, width: '100%' }}>
                {projects.map((project, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index} sx={{ paddingLeft: '8px' }}>
                            <div className='project-card'>
                                <div className='project-img'>
                                    {isLoading
                                        ? <Skeleton variant="rectangular" animation="wave" width='100%' height='100%' />
                                        : <img src={project.img} alt='project-image' />
                                    }
                                </div>
                                <div className='project-body'>
                                    <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
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
            <a href="/projects">Xem tất cả dự án</a>
        </div>
    )
};

export default FeaturedProjects;