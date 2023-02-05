import * as React from 'react';
import './Header.scss';

import headervideo from '../../../assets/videos/headervideo.mp4';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

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
                        <h1>2B+</h1>
                    </div>
                    <div className="company-name">
                        <h1>2B+</h1>
                        <h2>Archi</h2>
                    </div>
                    <div className="menu">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="projects">Dự án</a></li>
                            <li><a href="about">Giới thiệu</a></li>
                            <li><a href="contact">Liên hệ</a></li>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    <video id="video" src={headervideo}
                        autoPlay
                        loop
                        muted
                    // muted={isUnmute ? true : false}
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