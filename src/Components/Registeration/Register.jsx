import React from 'react';
import './Register.scss';
import { Card, CardContent, Typography, TextField, Button, CardActions } from '@mui/material';

function Register() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (

        <Card sx={{ borderRadius: '35px', backdropFilter: "blur", backgroundColor: 'rgba(0,0,30,0.4)' }} className='card'>
            <CardContent>
                <Typography className='formLabel' variant="h5" component="div" >
                    Register
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
                    <TextField
                        fullWidth
                        label="Picture URL"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Location"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        type="tel"
                        variant="outlined"
                        margin="normal"
                    />
                    <CardActions>
                        <Button type="submit" size="large" variant="contained" fullWidth>
                            Submit
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>

    );
}

export default Register;
