import React from 'react';
import './TopNavBar.scss';
import { Person } from '@mui/icons-material';
import FlagIcon from '@mui/icons-material/Flag';

const UserFlagIcons = () => {
    return (
        <div className="top-nav-bar-right">
            <Person className="nav-icon-flag" />
            <FlagIcon className="nav-icon-flag" />
        </div>
    );
};

export default UserFlagIcons;
