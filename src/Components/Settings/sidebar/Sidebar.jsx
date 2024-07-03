import React from 'react';
import './sidebar.scss';
import { AccountCircle, ShoppingCart, Home, Settings as SettingsIcon, Notifications } from '@mui/icons-material';
import { Button } from '@mui/material';

const Sidebar = ({ onIconClick }) => {
    const items = [
        { text: 'السيارات', icon: <AccountCircle />, path: 'cars' },
        { text: 'خدمات', icon: <ShoppingCart />, path: 'services' },
        { text: 'تسجيل', icon: <Home />, path: 'registration' },
        { text: 'تنبيهات', icon: <SettingsIcon />, path: 'notifications' },
        { text: 'خرائط', icon: <Notifications />, path: 'maps' },
        { text: 'طرق', icon: <ShoppingCart />, path: 'routes' },
        { text: 'أماكن', icon: <Home />, path: 'places' },
        { text: 'تقارير', icon: <SettingsIcon />, path: 'reports' },
        { text: 'دردشة', icon: <Notifications />, path: 'chat' },
    ];

    return (
        <div className='sidebar'>
            <ul className="list">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="list-item">
                            <Button
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'lightgray',
                                        '& .icon': {
                                            color: 'blue',
                                        },
                                        '& .text': {
                                            textDecoration: 'underline',
                                        }
                                    }
                                }}
                                onClick={() => onIconClick(item.path)}
                            >
                                <div>
                                    <div className="icon">{item.icon}</div>
                                    <div className="text">{item.text}</div>
                                </div>
                            </Button>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
