import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import fetchUserLocation from '../../../utils/fetchUserLocation';
import fetchJobs from '../../../utils/fetchJobs';
import styles from './nearbyjobs.style.js';
import { COLORS } from "../../../constants";
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router = useRouter();

  const [query, setQuery] = useState('React Developer');
  const [shouldFetch, setShouldFetch] = useState(false);
  const { location, address, isLocationLoading, locationError } = fetchUserLocation();

  const { data: searchData, isLoading: isSearchLoading, error: searchError, refetch } = fetchJobs('search', {
    query: query,
    num_pages: 1
  }, shouldFetch);

  useEffect(() => {
    if (address) {
      const newQuery = `React Developer in ${address.city}, ${address.isoCountryCode}`;
      setQuery(newQuery);
      setShouldFetch(true);  
    }
  }, [address]);

  useEffect(() => {
    if (searchData || searchError) {
      setShouldFetch(false);
    }
  }, [searchData, searchError]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {(isSearchLoading || isLocationLoading) ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : (searchError) ? (
          <Text>Something Went Wrong</Text>
        ) : (
          searchData?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
}

export default Nearbyjobs;
