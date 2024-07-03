import React, { useState, useEffect } from 'react';
import './cars.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, InputAdornment, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const LeftPanel = () => {
    const [checkboxData, setCheckboxData] = useState([
        { label: 'Label', defaultChecked: true, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'asd', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Required', defaultChecked: false, disabled: false },
        { label: 'Disabled', defaultChecked: false, disabled: true },
    ]);

    const [count, setCount] = useState(checkboxData.length);

    useEffect(() => {
        setCount(checkboxData.length);
    }, [checkboxData]);

    return (
        <>
            <div className="left-panel-container">
                <div className='left-panel'>
                    <div className='search'>
                        <TextField
                            sx={{ mr: '25px', width: '70%' }}
                            id="outlined-search"
                            label="Search field"
                            type="search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button sx={{ height: '56px' }} variant="outlined" href="#outlined-buttons">
                            +
                        </Button>
                    </div>
                    <div className='group-list'>
                        <p className='group-label'>ليست في مجموعة ({count})</p>
                        <div>
                            <FormGroup>
                                {checkboxData.map((checkbox, index) => (
                                    <FormControlLabel
                                        key={index}
                                        control={
                                            <Checkbox
                                                defaultChecked={checkbox.defaultChecked}
                                                disabled={checkbox.disabled}
                                                sx={{
                                                    color: 'black',
                                                    '&.Mui-checked': {
                                                        color: 'black',
                                                    },
                                                }}
                                            />
                                        }
                                        label={checkbox.label}
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftPanel;
