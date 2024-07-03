import React from 'react';
import { AccountCircle, ShoppingCart, Home, Settings as SettingsIcon, Notifications } from '@mui/icons-material';
import { Button } from '@mui/material';

const SidebarRight = ({ onIconClick }) => {
    const items = [
        { icon: <AccountCircle />, path: 'cars' },
        { icon: <ShoppingCart />, path: 'services' },
        { icon: <Home />, path: 'registration' },
        { icon: <SettingsIcon />, path: 'notifications' },
        { icon: <Notifications />, path: 'maps' },
        { icon: <ShoppingCart />, path: 'routes' },
        { icon: <Home />, path: 'places' },
        { icon: <SettingsIcon />, path: 'reports' },
        { icon: <Notifications />, path: 'chat' },
        { icon: <Home />, path: 'places' },
        { icon: <SettingsIcon />, path: 'reports' },
        { icon: <Notifications />, path: 'chat' },
    ];

    return (
        <div className='sidebarRight'>
            <ul className="list">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="list-item-right">
                            <Button
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'lightgray',
                                        '& .icon': {
                                            color: 'blue',
                                        }
                                    }
                                }}
                                onClick={() => onIconClick(item.path)}
                            >
                                <div>
                                    <div className="icon">{item.icon}</div>
                                </div>
                            </Button>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default SidebarRight;
