import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScreenHeaderBtn, NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from '../../styles/search';

import fetchUserLocation from '../../utils/fetchUserLocation';


const JobSearch = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setScreen] = useState(1);

    const [query, setQuery] = useState(params.id);
    const [shouldFetch, setShouldFetch] = useState(false);
    const { location, address, isLocationLoading, locationError } = fetchUserLocation();

    useEffect(() => {
        if (address) {
          const newQuery = `${params.id} in ${address.city}, ${address.isoCountryCode}`;
          setQuery(newQuery);
          setShouldFetch(true);  
        }
    }, [address]);

    const handleSearch = async () => {
        if (!shouldFetch) return;

        setSearchLoader(true);
        console.log("THE QUERY IN THE SEARCH FOLDER IS " + query)
        const CACHE_KEY = `search_${query}`;

        try {
            const cachedData = await AsyncStorage.getItem(CACHE_KEY);
            if (cachedData) {
                setSearchResult(JSON.parse(cachedData));
                setShouldFetch(false);
            } else {
                const options = {
                    method: 'GET',
                    url: 'https://jsearch.p.rapidapi.com/search',
                    headers: {
                        ,
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                    },
                    params: {
                        query: query,
                        page: page.toString(),
                    },
                };

                const response = await axios.request(options);
                setSearchResult(response.data.data);
                await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data.data));
            }
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setScreen(page - 1);
            handleSearch();
        } else if (direction === 'right') {
            setScreen(page + 1);
            handleSearch();
        }
    };

    useEffect(() => {
        if (shouldFetch) {
          handleSearch();
        }
      }, [shouldFetch]); 
    

    useEffect(() => {
        handleSearch();
    }, [page]); // Re-run when page changes

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: '',
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};
export default JobSearch;
