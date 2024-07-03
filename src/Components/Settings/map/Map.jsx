import React, { useState } from 'react'
import './Map.scss'
import Footer from '../Footer/Footer';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton } from '@mui/material';
import GoogleMapsLoader from '../mapApi/GoogleMapsLoader';

const deviceId = '1'; 


function Map() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const toggleFooterVisibility = () => {
        setIsFooterVisible((prevVisibility) => !prevVisibility);
    };
    return (
        <>
            {/* <div className='map-space' >{isFooterVisible && <Footer />} </div> */}
            <div className='map-space' >
                <GoogleMapsLoader deviceId={deviceId} />
                {isFooterVisible && <Footer />} </div>
            {/* <IconButton sx={{
                backdropFilter: 'brightness(90%);',

                borderRadius: '4px',
            }} onClick={toggleFooterVisibility}>
                <ArrowDropUpIcon sx={{ width: '83vw', marginTop: -1, display: 'flex' }} />
            </IconButton> */}
        </>

    )
}

export default Map