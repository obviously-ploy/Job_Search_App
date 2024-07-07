import React from 'react';
import { View, SafeAreaView, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn } from '../../components';
import styles from './profile.style';
import ProfilePageInfo from '../../components/common/cards/profile/ProfilePageInfo'; 
import ProfilePageUtils from '../../components/common/cards/profile/ProfilePageUtils'; 

const ProfilePage = () => {
    const router = useRouter();

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
                    <ImageBackground source={images.profile} resizeMode="cover" style={styles.pictureImage} />
                    <TouchableOpacity>
                        <View style={styles.cameraCircle}>
                            <ImageBackground source={icons.camera} resizeMode="cover" style={styles.cameraImage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.nameStyle}>Carl Baseka</Text>
                    <Text style={styles.activeStyle}>Active Since - Dec, 2013</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Personal Information</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <ProfilePageInfo
                    iconUrl={icons.user}
                    info="Carl Baseka"
                />
                <ProfilePageInfo
                    iconUrl={icons.email}
                    info="example@example.com"
                />
                <ProfilePageInfo
                    iconUrl={icons.phone}
                    info="(123) 456-7890"
                />
                <ProfilePageInfo
                    iconUrl={icons.location}
                    info="123 Main St, Anytown, USA"
                />
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Utilities</Text>
                </View>
                <ProfilePageUtils
                    iconUrl={icons.favorite}
                    info = "Favorite Jobs"
                />
                <ProfilePageUtils
                    iconUrl={icons.help}
                    info = "Help"
                    handlePress={() => {router.push("https://www.merriam-webster.com/dictionary/help")}}
                />
                <ProfilePageUtils
                    iconUrl={icons.logout}
                    info = "Sign Out"
                    handlePress={() => {router.push("../login/Login")}}
                />
            </View>

        </SafeAreaView>
    );
}

export default ProfilePage;
