import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import dayjs from 'dayjs';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AddressNav from './AddressNav';
import { useNavigate } from 'react-router-dom';

const shopAddress = { id: 8, name: "Shop A", lat: 31.8946386, lng: 35.1750737 };
// ,

const generateUniqueId = () => {
    return `INV-${uuidv4()}`;
};
const TaskForm = () => {
    const [devices, setDevices] = useState([]);
    const [device, setDevice] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('3');
    const [startDateTime, setStartDateTime] = useState(dayjs());
    const [endDateTime, setEndDateTime] = useState(dayjs());
    const [deliveryStartDateTime, setDeliveryStartDateTime] = useState(dayjs());
    const [deliveryEndDateTime, setDeliveryEndDateTime] = useState(dayjs());
    const [homeAddress, setHomeAddress] = useState({});
    const [invoiceNumber, setInvoiceNumber] = useState(generateUniqueId());
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [form, setForm] = useState({
        id: 2,
        device_id: 1,
        user_id: 1,
        title: '',
        comment: '2 برجر 1 كوasdشنو هذااااا',
        priority: 3,
        status: 1,
        invoice_number: '115',
        pickup_address: 'مطعم لازاورد, شارع الطيرة, بطن الهوى, رام الله, محافظة رام الله والبيرة, منطقة أ, يهودا والسامرة, 00972, Palestinian Territory',
        pickup_address_lat: 31.9209736,
        pickup_address_lng: 35.1762547,
        pickup_time_from: '2024-06-20 08:00:00',
        pickup_time_to: '2024-06-20 12:00:00',
        delivery_address: 'capers, شارع الكلية الاهلية, رام الله, رام الله التحتة, رام الله, محافظة رام الله والبيرة, منطقة أ, يهودا والسامرة, 123, Palestinian Territory',
        delivery_address_lat: 31.90597075,
        delivery_address_lng: 35.2002109028187,
        delivery_time_from: '2024-06-20 12:00:00',
        delivery_time_to: '2024-06-20 17:00:00',
        created_at: '2024-06-20 20:06:24',
        updated_at: '2024-06-26 12:30:23'
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Cookie', 'laravel_session=eyJpdiI6ImRIMzFLbDM5aXZ1amdtS0lZTnZvU0E9PSIsInZhbHVlIjoiNHVrZWpTMkN0ZG4zbGU1QkRIUTFEd3ZnQlhSVmpXS3JCMmVWSnJEYmR1Tng5YUF6V0NQVWg5TkJcL256Q3h1RGRGanhKT2V4VUNMem1wZnR0b0NCbWV3dEN2NWZkSW5YRnI5Z1JPcmpuSGhoam56N0VidVpzODkxOW9waDhnRWVFIiwibWFjIjoiZDRmN2ZkYzk4M2YwZGRkNWY4MWY1NWQ3OTVkOTVmZmQ2ZjU0MGJlZmRmZWViMDY1MDNlYjYzZDRhMDlhYmM1NyJ9');
    
        const raw = JSON.stringify(form);
    
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
          credentials: 'include' 
        };
    
        fetch('/api/add_task?user_api_hash=$2y$10$F4RpJGDpBDWO2ie448fQAu2Zo0twdwyBdMmnbeSqFbEkjGYocP.Y6', requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error('Error:', error));
      };




    const navigate = useNavigate();
    useEffect(() => {
        axios.get(
            "http://185.203.217.168/api/get_devices?lang=en&user_api_hash=$2y$10$F4RpJGDpBDWO2ie448fQAu2Zo0twdwyBdMmnbeSqFbEkjGYocP.Y6"
        )
            .then(response => {
                const items = response.data[1].items;
                setDevices(items.map(item => item.name));
            })
            .catch(error => {
                console.error('There was an error fetching the devices!', error);
            });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const closestDriver = await fetchClosestDriver(shopAddress);
            if (closestDriver) {
                if (!devices.includes(closestDriver.driverName)) {
                    setDevices(prevDevices => [...prevDevices, closestDriver.driverName]);
                }
                setDevice(closestDriver.driverName);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (formSubmitted) {
            const postData = async () => {
                const task = {
                    id: generateUniqueId(),
                    device_id: device,
                    user_id: 'user123', // Example user ID, replace with actual user ID
                    title: title,
                    comment: 'This is a comment',
                    priority,
                    status: 1, // Update to the desired status
                    invoice_number: invoiceNumber,
                    pickup_address: shopAddress.name,
                    pickup_address_lat: shopAddress.lat,
                    pickup_address_lng: shopAddress.lng,
                    pickup_time_from: startDateTime.toISOString(),
                    pickup_time_to: endDateTime.toISOString(),
                    delivery_address: homeAddress.value,
                    delivery_address_lat: homeAddress.lat,
                    delivery_address_lng: homeAddress.lon,
                    delivery_time_from: deliveryStartDateTime.toISOString(),
                    delivery_time_to: deliveryEndDateTime.toISOString(),
                    created_at: dayjs().toISOString(),
                    updated_at: dayjs().toISOString(),
                };
                try {
                    const response = await axios.post('http://localhost:3000/form', task, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    console.log('Response:', response.data);
                    setInvoiceNumber(generateUniqueId());
                } catch (error) {
                    console.error('Error posting data:', error);
                }
            };

            postData();
            setFormSubmitted(false);
        }
    }, [formSubmitted, device, priority, startDateTime, endDateTime, deliveryStartDateTime, deliveryEndDateTime, homeAddress, shopAddress, invoiceNumber]);

    const fetchClosestDriver = async (shopAddress) => {
        if (!shopAddress || !shopAddress.lat || !shopAddress.lng) {
            console.error("Invalid shop address");
            return null;
        }

        try {
            const response = await axios.get("http://localhost:8000/closest-driver", {
                params: {
                    lat: shopAddress.lat,
                    lng: shopAddress.lng
                }
            });
            return response.data;
            
        } catch (error) {
            console.error("Error fetching closest driver:", error);
            return null;
        }
    };
    const handleAddressSelect = (selectedAddress) => {
        setForm(prevForm => ({
            ...prevForm,
            delivery_address: selectedAddress.value,
            delivery_address_lat: selectedAddress.lat || '',
            delivery_address_lng: selectedAddress.lng || ''
        }));
    };
    
    return (
        <Container maxWidth="md" sx={{ bgcolor: 'gray', color: 'white', padding: 3, borderRadius: 2 }}>
            <Typography sx={{ direction: 'rtl' }} variant="h6" gutterBottom>
                مهمة جديدة
            </Typography>
            <Typography sx={{ color: 'white', display: 'flex', justifyContent: 'center', mb: '20px' }}>اختار عنوان التسليم</Typography>
            <AddressNav onAddressSelect={handleAddressSelect} />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            label="رقم الفاتورة"
                            name="invoice_number"
                            value={form.invoiceNumber}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            sx={{ bgcolor: 'white' }}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            label="تفاصيل العنوان (اختياري)"
                            name = "title"
                            value={form.title}
                            onChange ={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            sx={{ bgcolor: 'white' }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button sx={{ height: '10vh', width: '100%' }} variant="contained" color="success"  type="submit">
                            إرسال
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default TaskForm;