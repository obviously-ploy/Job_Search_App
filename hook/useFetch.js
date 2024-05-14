import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '905780b24bmsh8a590587a40bd1dp19f955jsnca737cb3180d',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const cacheKey = `${endpoint}_${JSON.stringify(query)}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                setData(JSON.parse(cachedData));
                setIsLoading(false);
            } else {
                const response = await axios.request(options);
                setData(response.data.data);
                localStorage.setItem(cacheKey, JSON.stringify(response.data.data));
                setIsLoading(false);
            }
        } catch (error) {
            setError(error);
            alert("There is an error");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
