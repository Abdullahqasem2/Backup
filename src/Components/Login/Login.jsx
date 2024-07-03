import React, { useState } from 'react';
import './Login.scss';
import { Card, CardContent, Typography, TextField, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [redirectToSettings, setRedirectToSettings] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here

        setRedirectToSettings(true);
    };

    if (redirectToSettings) {
        navigate('/settings');
    }


    return (
        <>
            <Card sx={{ borderRadius: '35px', backdropFilter: "blur", backgroundColor: 'rgba(0,0,30,0.4)' }} className='card'>
                <CardContent>
                    <Typography className='formLabel' variant="h5" component="div" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <CardActions>
                            <Button type="submit" size="large" variant="contained" fullWidth>
                                Submit
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default Login;
