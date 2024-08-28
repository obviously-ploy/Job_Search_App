import {useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import {icons, SIZES, COLORS} from "../../../constants"

import useFetchUserData from '../../../utils/useFetchUserData'

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor']

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  const {userData, error, isLoading} = useFetchUserData()
  
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching user data: {error.message}</Text>
      </View>
    );
  }
  
  const user = userData && userData[0]
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user ? user.fullName : "User"}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value = {searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleClick} >
        <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
      </View>

      <View style = {styles.tabsContainer}>
        <FlatList
          data ={jobTypes}
          renderItem={({item}) =>(
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={ () => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome