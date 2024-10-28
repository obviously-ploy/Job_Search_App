import React from 'react';
import { View, SafeAreaView, Text, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn } from '../../components';
import styles from './profile.style';
import ProfileScreenInfo from '../../components/common/cards/profile/ProfileScreenInfo'; 
import ProfileScreenUtils from '../../components/common/cards/profile/ProfileScreenUtils'; 
import { signOut, getAuth } from 'firebase/auth';
import useFetchUserData from '../../utils/useFetchUserData';

const ProfileScreen = () => {
    const router = useRouter();

    const onSubmit = async () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            router.push("../login/LoginScreen");
        }).catch((error) => {
            Alert.alert("Error", error.message);
        });
    };

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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => { router.back() }}
                        />
                    ),
                    headerTitle: 'Your Profile'
                }}
            />
            <View style={styles.margins}>
                <View style={styles.imageContainer}>
                    <View style={styles.pictureContainer}>
                        <ImageBackground source={images.profile} resizeMode="cover" style={styles.pictureImage}/>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.cameraCircle}>
                            <ImageBackground source={icons.camera} resizeMode="cover" style={styles.cameraImage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.nameStyle}>{user ? user.fullName : 'Full Name'}</Text>
                    <Text style={styles.activeStyle}>Active Since - Dec, 2013</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Personal Information</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <ProfileScreenInfo
                    iconUrl={icons.name}
                    info={user ? user.fullName : 'Full Name'}
                />
                <ProfileScreenInfo
                    iconUrl={icons.email}
                    info={user ? user.email :  "Email"}
                />
                <ProfileScreenInfo
                    iconUrl={icons.phone}
                    info={user ? user.phone : "Phone Number"}
                />
                <TouchableOpacity>
                    <ProfileScreenInfo
                        iconUrl={icons.docs}
                        info="Resume"
                    />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Utilities</Text>
                </View>
                <ProfileScreenUtils
                    iconUrl={icons.favorite}
                    info = "Favorite Jobs"
                />
                <ProfileScreenUtils
                    iconUrl={icons.help}
                    info = "Help"
                    handlePress={() => {router.push("https://www.merriam-webster.com/dictionary/help")}}
                />
                <ProfileScreenUtils
                    iconUrl={icons.logout}
                    info = "Sign Out"
                    handlePress={onSubmit}
                />
            </View>

        </SafeAreaView>
    );
}

export default ProfileScreen;
