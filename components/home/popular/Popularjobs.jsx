import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import useFetchJobs from '../../../utils/useFetchJobs';
import useLocation from '../../../utils/useLocation';
import styles from './popularJobs.style';
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();

  const [query, setQuery] = useState('React Developer');
  const [shouldFetch, setShouldFetch] = useState(false);
  const { location, address, isLocationLoading, locationError } = useLocation();


  const { data: searchData, isLoading: isSearchLoading, error: searchError, refetch } = useFetchJobs('search', {
    query: query,
    num_pages: 1
  }, shouldFetch);

  useEffect(() => {
    if (address) {
      const newQuery = `Developer in ${address.city}, ${address.isoCountryCode}`;
      setQuery(newQuery);
      setShouldFetch(true);  
    }
  }, [address]);

  useEffect(() => {
    if (searchData || searchError) {
      setShouldFetch(false); 
      // console.log("Search Data:", searchData);
      // console.log("Search Error:", searchError);
    }
  }, [searchData, searchError]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  // useEffect(() => {
  //   // console.log('Data:', data);
  //   // console.log('Loading:', isLoading);
  //   // console.log('Error:', error);
  // }, [data, isLoading, error]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isSearchLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : searchError ? (
          <Text>Something Went Wrong</Text>
        ) : searchData && searchData.length > 0 ? (
          <FlatList
            data={searchData}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        ) : (
          <Text>No Jobs Found</Text>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
