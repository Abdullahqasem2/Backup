import React, { useState } from 'react';

const FormComponent = () => {
  const [form, setForm] = useState({
    id: 2,
    device_id: 1,
    user_id: 1,
    title: 'ألطيرة',
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
      credentials: 'include' // This will include cookies with the request
    };

    fetch('/api/add_task?user_api_hash=$2y$10$F4RpJGDpBDWO2ie448fQAu2Zo0twdwyBdMmnbeSqFbEkjGYocP.Y6', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={form.title} onChange={handleChange} />
      </label>
      <label>
        Comment:
        <input type="text" name="comment" value={form.comment} onChange={handleChange} />
      </label>
      <label>
      device_id:
        <input type="text" name="device_id" value={form.device_id} onChange={handleChange} />
      </label>
      {/* Add other fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
