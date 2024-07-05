import {View, ScrollView, SafeAreaView, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, SIZES, images } from "../../constants";
import { ScreenHeaderBtn } from '../../components';
import styles from './profile.style';


const ProfilePage= () => {
    const router = useRouter();

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}} >
           <Stack.Screen
             options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () =>(
                    <ScreenHeaderBtn 
                        iconUrl={icons.left} 
                        dimension="60%"
                        handlePress={() => {router.back()}}
                    />
                    
                ),
                headerTitle: 'Your Profile'
            }}/>
            <View style={styles.margins}>
                <View style={styles.imageContainer}>
                    <View >
                        <ImageBackground source={images.profile} resizeMode="cover" style={styles.pictureImage}/>
                        <TouchableOpacity>
                            <View style={styles.cameraCircle}>
                                <ImageBackground source={icons.camera} resizeMode="cover" style={styles.cameraImage}/>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.nameStyle}>Carl Baseka</Text>
                    <Text style={styles.activeStyle}>Active Since - Dec, 2013</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Personal Information</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn}>Edit</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.fieldWrapper}>
                        <Image source={icons.mail} resizeMode="cover" style={styles.fieldImage}/>
                        <Text style={styles.fieldInput}></Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldWrapper}>
                        <Image source={icons.mail} resizeMode="cover" style={styles.fieldImage}/>
                        <Text style={styles.fieldInput}></Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldWrapper}>
                        <Image source={icons.mail} resizeMode="cover" style={styles.fieldImage}/>
                        <Text style={styles.fieldInput}></Text>
                    </View>
                </View>
                
            </View>
            
           
        </SafeAreaView>
    )
}

export default ProfilePage
