import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = (endpoint, query, shouldFetch) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'ce360f9932msh5ff2216aba6d4e3p1d92acjsn3fc397d0d511',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    if (!shouldFetch) return;

    setIsLoading(true);
    // console.log("Fetching data with options:", options);

    try {
      const cacheKey = `${endpoint}_${JSON.stringify(query)}`;
      const cachedData = await AsyncStorage.getItem(cacheKey);

      if (cachedData) {
        console.log("Using cached data");
        setData(JSON.parse(cachedData));
      } else {
        const response = await axios.request(options);
        setData(response.data.data);
        await AsyncStorage.setItem(cacheKey, JSON.stringify(response.data.data));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
    }
  }, [shouldFetch]); 

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;