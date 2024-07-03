import axios from 'axios';

const API_URL = 'http://185.203.217.168/api/get_devices?lang=en&user_api_hash=$2y$10$F4RpJGDpBDWO2ie448fQAu2Zo0twdwyBdMmnbeSqFbEkjGYocP.Y6';

export const getDevices = async () => {
  try {
    const response = await axios.get(API_URL);
    const devices = response.data;
    console.log('API Response:', devices);

    // Extract coordinates from the items array of each device
    const deviceCoordinates = [];
    devices.forEach(device => {
      device.items.forEach(item => {
        if (item.lat && item.lng) {
          deviceCoordinates.push({ lat: item.lat, lng: item.lng, id: item.device_id, title: device.title });
        }
      });
    });

    return deviceCoordinates;
  } catch (error) {
    console.error('Error fetching devices:', error);
    return [];
  }
};
