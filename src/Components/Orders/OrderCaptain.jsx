import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderCaptain() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/taskform');
    }

    return (
        <div>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '38vh',
                flexDirection: 'column'
            }}>
                <Typography sx={{ width: '44vw', mb: '2vh' }} color={'black'} variant="h6" component="div" gutterBottom>
                    زر "طلب كابتن" مصمم لدمج سلس وتشغيل فعال. ببساطة انقر على الزر لاستدعاء كابتن مؤهل على الفور. هذه الميزة تضمن استجابة سريعة وخدمة احترافية، مصممة لتلبية الاحتياجات المحددة لمستخدمينا.
                </Typography>
                <Button
                    sx={{
                        width: '15vw',
                        height: '15vh',
                        fontSize: '18px',
                    }}
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                >
                    طلب كابتن
                </Button>
            </Container>
        </div>
    );
}

export default OrderCaptain;
