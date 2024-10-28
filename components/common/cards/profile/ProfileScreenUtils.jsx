import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './profileScreen.style'

const ProfileScreenUtils = ({ iconUrl, info, handlePress }) => {
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container} onPress={handlePress}>
                <Image source={iconUrl} style={styles.icon} />
                <Text style={styles.infoText}>{info}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileScreenUtils