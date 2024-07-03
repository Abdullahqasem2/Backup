import React, { useState } from 'react';
import './Settings.scss';
import Sidebar from './sidebar/Sidebar';
import TopNavBar from './TopNavBar/TopNavBar';
import Cars from './cars/Cars';
import UserFlagIcons from './TopNavBar/UserFlagIcons';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, IconButton } from '@mui/material';
import Map from './map/Map';
import SidebarRight from './Sidebar-right/SidebarRight';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSidebarClick = (component) => {
        setSelectedComponent(component);
    };

    const toggleCarsComponent = () => {
        setSelectedComponent((prevComponent) => (prevComponent === 'cars' ? null : 'cars'));
    };
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/taskform');
    }
    return (
        <div className='container'>
            {/* <Sidebar onIconClick={handleSidebarClick} /> */}
            <div className='content'>
                <div className='nav'>
                    <TopNavBar />
                    <div className='spacer'></div>
                    <Button
                sx={{
                    width: '15vw',
                    height: '9vh',
                    fontSize: '18px',
                    mr:'5px'
                }}
                variant="contained"
                color="success"
                onClick={handleSubmit}
            >
                طلب كابتن
            </Button>
                    <UserFlagIcons />
                </div>
                <div className='main-content'>
                    {selectedComponent === 'cars' && (
                        <div className='cars-component'>
                            <Cars />
                        </div>
                    )}
                    {/* <div className='icon-button-container'>
                        <IconButton
                            sx={{
                                backdropFilter: 'brightness(90%)',
                                borderRadius: '4px',
                                height: '100%',
                            }}
                            onClick={toggleCarsComponent}
                        >
                            <PlayArrowIcon />
                        </IconButton>
                    </div> */}
                    <div className='map'>
                        <Map />
                    </div>
                    <div>
                        {/* <SidebarRight /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;