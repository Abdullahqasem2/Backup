import React from 'react';
import '../Footer/Footer.scss';
import { Button } from '@mui/material';
import Badge from '@mui/joy/Badge';

const Footer = () => {
    return (
        <div className='info-box'>
            <div className='info-box-content'>
                <div className='info-column'>
                    <p className='info-header'>الصيانة</p>
                    <Button variant='outlined'>إضافة خدمة الصيانة</Button>
                </div>
                <hr />
                <div className='info-column'>
                    <p className='info-header'>أجهزة الاستشعار</p>
                    <p className='info-data'>غير متصل</p>
                </div>
                <hr />
                <div className='info-column'>
                    <p className='info-header'>السرعة</p>
                    <p className='info-data'>غير متصل</p>
                    <p className='info-data'>غير متصل</p>
                    <p className='info-data'>غير متصل</p>
                    <p className='info-data'>غير متصل</p>
                </div>
                <div className='info-column-status'>
                    ACK <span><Badge color="success"  /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
