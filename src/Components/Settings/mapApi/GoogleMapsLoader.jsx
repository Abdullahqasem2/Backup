import React, { useEffect, useState, useRef, useCallback } from 'react';
import io from 'socket.io-client';
// import { API_KEY } from '../../../config';

const socket = io('http://localhost:8000');

const GoogleMapsLoader = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [driverLocations, setDriverLocations] = useState([]);
  const [shopLocations, setShopLocations] = useState([
    { id: 8, name: "Shop A", lat: 31.9197688227728, lng: 35.21693786802346 },
    { id: 1, name: "Shop X", lat: 31.940026621132002, lng: 35.16957950739496 },
    { id: 2, name: "Shop Y", lat: 31.973111981350307, lng: 35.19838318838608 },
  ]);
  const mapRef = useRef(null);
  const markersRef = useRef({});

  const loadGoogleMaps = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        setIsScriptLoaded(true);
        resolve();
        return;
      }

      const existingScript = document.getElementById('googleMaps');
      if (existingScript) {
        existingScript.onload = () => {
          setIsScriptLoaded(true);
          resolve();
        };
        return;
      }

      const script = document.createElement('script');
      script.id = 'googleMaps';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBpLfENt9ayKz1lZxN2GGimK2nL05HNSc&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsScriptLoaded(true);
        resolve();
      };
      script.onerror = () => reject(new Error('The Google Maps JavaScript API could not load.'));

      document.head.appendChild(script);
    });
  }, []);

  useEffect(() => {
    loadGoogleMaps()
      .then(() => console.log('Google Maps loaded'))
      .catch((error) => console.error('Error loading Google Maps:', error));

    return () => {
      const script = document.getElementById('googleMaps');
      if (script) {
        script.remove();
      }
    };
  }, [loadGoogleMaps]);


  useEffect(() => {
    if (isScriptLoaded) {
      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 31.898043, lng: 35.204269 },
          zoom: 12.5,
        });
      }

      driverLocations.forEach((driver) => {
        const carIcon = {
          path: 'M20.92 5.01c-.35-.61-1.04-1-1.75-1H4.83c-.71 0-1.4.39-1.75 1L1 9v12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h16v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9l-2.08-3.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
          fillColor: '#FF0000',
          fillOpacity: 1,
          scale: 1,
          anchor: new window.google.maps.Point(15, 15),
        };


        if (!markersRef.current[driver.id]) {
          markersRef.current[driver.id] = new window.google.maps.Marker({
            position: { lat: driver.lat, lng: driver.lng },
            map: mapRef.current,
            title: `Driver ${driver.name}`,
            icon: carIcon,
          });
        } else {
          markersRef.current[driver.id].setPosition(new window.google.maps.LatLng(driver.lat, driver.lng));
        }
      });

      const shopIcon = {
        path: "M21.5,13c-0.4,0-0.8-0.2-1-0.6l-0.8-2.2H4.3L3.5,12.4c-0.2,0.4-0.6,0.6-1,0.6c-0.7,0-1.2-0.6-1.2-1.3c0-0.5,0.3-1,0.8-1.2l1.6-4.5C4.2,5.5,5,5,5.8,5h12.5c0.8,0,1.6,0.5,1.9,1.3l1.6,4.5c0.5,0.2,0.8,0.7,0.8,1.2C22.7,12.4,22.2,13,21.5,13z M5.8,6.5c-0.4,0-0.8,0.2-1,0.6l-1.1,3.1h15.5l-1.1-3.1c-0.2-0.4-0.6-0.6-1-0.6H5.8z M8,14c0.8,0,1.5,0.7,1.5,1.5S8.8,17,8,17S6.5,16.3,6.5,15.5S7.2,14,8,14z M16,14c0.8,0,1.5,0.7,1.5,1.5S16.8,17,16,17s-1.5-0.7-1.5-1.5S15.2,14,16,14z",
        fillColor: "#FF0000",
        fillOpacity: 1,
        scale: 1,
        anchor: new window.google.maps.Point(15, 15),
      };


      shopLocations.forEach((shop) => {
        if (!markersRef.current[shop.id]) {
          markersRef.current[shop.id] = new window.google.maps.Marker({
            position: { lat: shop.lat, lng: shop.lng },
            map: mapRef.current,
            title: `Shop ${shop.name}`,
            icon: shopIcon,
          });
        }
      });
    }
  }, [isScriptLoaded, driverLocations, shopLocations]);

  return <div id="map" style={{ height: '77vh', width: '100%' }}></div>;
};

export default GoogleMapsLoader;
