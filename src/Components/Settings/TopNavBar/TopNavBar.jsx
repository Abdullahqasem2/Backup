import React from 'react';
import './TopNavBar.scss';
import { Settings, Dashboard, Notifications, Home, CameraAlt, Check, Share, Build } from '@mui/icons-material';

const TopNavBar = () => {
    return (
        <div className="top-nav-bar">
            <div className="logo">
                Help Me
            </div>
            {/* <div className="nav-icons">
                <Settings className="nav-icon" />
                <Dashboard className="nav-icon" />
                <Notifications className="nav-icon" />
                <Home className="nav-icon" />
                <CameraAlt className="nav-icon" />
                <Check className="nav-icon" />
                <Build className="nav-icon" />
                <Share className="nav-icon" />
            </div> */}
        </div>
    );
};

export default TopNavBar;
