import * as React from 'react';
import './Header.scss';

import fullLogo from '../../../assets/imgs/full_logo.png';
import logoA from '../../../assets/imgs/logoA.png';
import headervideo from '../../../assets/videos/headervideo.mp4';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    const [isPlay, setPlay] = React.useState(true);
    const [isUnmute, setUnmute] = React.useState(true);
    const [videoheader, setVideo] = React.useState();

    React.useEffect(() => {
        setVideo(document.querySelector("#video"));
    }, []);

    const handlePauseVideo = () => {
        if (videoheader.paused) {
            videoheader.play();
            setPlay(true);
        } else {
            videoheader.pause();
            setPlay(false);
        }
    }

    const handleMuteVideo = () => {
        if (videoheader.muted === false) {
            videoheader.muted = true;
            setUnmute(true);
        } else {
            videoheader.muted = false;
            setUnmute(false);
        }
    }

    return (
        <nav>
            <div className="navbar">
                <div className="header-container nav-container">
                    <div className="logo">
                        <img src={fullLogo} alt="logo" />
                    </div>
                    <div className="company-name">
                        <h1>2b+</h1>
                        <h2>archi</h2>
                        <div className='logo-a'>
                            <img src={logoA} alt="logo" />
                        </div>
                    </div>
                    <div className="menu">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <div className="sub-menu">
                                <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
                                <label className="for-dropdown-sub" for="dropdown-sub">
                                    Dự án
                                    <AddIcon />
                                </label>
                                <ul>
                                    <li><a href="house">Nhà phố</a></li>
                                    <li><a href="villa">Biệt thự</a></li>
                                    <li><a href="shop">Văn phòng</a></li>
                                    <li><a href="hotel">Khách sạn</a></li>
                                </ul>
                            </div>
                            <li><a href="building">Xây dựng</a></li>
                            <li><a href="apartment">Chung cư</a></li>
                            <li><a href="restaurant">Nhà hàng</a></li>
                            <li><a href="about">Giới thiệu</a></li>
                            <li><a href="phongthuy">Phong thủy</a></li>
                            <li><a href="contact">Liên hệ</a></li>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    {/* {
                        isLoading
                            ? <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" animation="wave" width='100%' height='calc(100vh - 62px)' />
                            : <video id="video" src={headervideo}
                                autoPlay
                                loop
                                muted
                            ></video>
                    } */}
                    <video id="video" src={headervideo}
                        autoPlay
                        loop
                        muted
                    ></video>
                    <div className='video-controllers'>
                        <button onClick={handlePauseVideo}>
                            {isPlay ? <PauseIcon /> : <PlayArrowIcon />}
                        </button>
                        <button onClick={handleMuteVideo}>
                            {isUnmute ? <VolumeOffIcon /> : <VolumeUpIcon />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;