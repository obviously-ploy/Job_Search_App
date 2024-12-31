import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const fetchUserLocation = () => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLocation = async () => {
        setIsLoading(true);
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setError('Permission to access location was denied');
            setIsLoading(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);

        try {
            let address = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            setAddress(address[0]);
        } catch (error) {
            setError('Failed to get address');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    return { location, address, isLoading, error };
}

export default fetchUserLocation;
