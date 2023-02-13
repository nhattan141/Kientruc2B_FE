import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import usePagination from '../../../HOC/usePagination';

import { Typography, Grid, Box, Stack, Pagination } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './ListProduct.scss';

import project1 from '../../../assets/imgs/project1.jpg';
import project2 from '../../../assets/imgs/project2.jpg';
import project3 from '../../../assets/imgs/project3.jpg';
import project4 from '../../../assets/imgs/project4.jpg';
import project5 from '../../../assets/imgs/project5.jpg';
import project6 from '../../../assets/imgs/project6.jpg';
import project7 from '../../../assets/imgs/project7.jpg';
import project8 from '../../../assets/imgs/project8.jpg';
import project9 from '../../../assets/imgs/project9.jpg';

const ListProduct = () => {
    let { cate_id } = useParams();

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
        {
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
    ];

    // ==================== Pagination =================
    let [page, setPage] = React.useState(1);
    const itemsPerPage = 9;

    const data = usePagination(projects, itemsPerPage);

    let currentData = data.currentData();

    const handleChangePage = (e, p) => {
        setPage(p);
        data.jumpPage(p);
    };

    return (
        <div className="list-project">
            <div className="list-title">
                <Box sx={{ flexGrow: 1, background: 'rgba(25,25,25,.5)' }}>
                    <Grid container spacing={2} sx={{
                        width: '100vw',
                        height: '260px',
                        padding: '80px',
                        marginTop: 0,
                        color: 'white'
                    }}>
                        <Grid item md={12}>
                            <Typography variant="h2" sx={{
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: '600',
                                fontSize: '36px'
                            }}>
                                {cate_id}
                            </Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Link to={`/`}>
                                    Trang chu
                                </Link>
                                <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                                <Link to={`category/${cate_id}`}>
                                    {cate_id}
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Grid container spacing={2} sx={{
                    // marginLeft: '-16px',
                    marginTop: 0,
                }}>
                    {currentData.map((project, index) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                md={4}
                                key={index}
                                sx={{
                                    cursor: 'pointer',
                                    "&:hover>.project-card:before": {
                                        width: '100px',
                                        height: '50px',
                                        borderTop: '2px solid #000',
                                        borderLeft: '2px solid #000',
                                    },
                                    "&:hover>.project-card:after": {
                                        width: '100px',
                                        height: '50px',
                                        borderBottom: '2px solid #000',
                                        borderRight: '2px solid #000',
                                    },
                                    "&:hover>.project-card>.project-img": {
                                        opacity: '.4'
                                    },
                                    "&:hover>.project-card>.project-body": {
                                        opacity: '1',
                                        transform: 'translate(-50%,0)'
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
            <Pagination count={data.maxPage} page={page} onChange={handleChangePage} boundaryCount={2} />
        </div >
    )
};

export default ListProduct;