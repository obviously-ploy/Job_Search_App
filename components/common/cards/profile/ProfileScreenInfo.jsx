import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './profileScreen.style.js'

const ProfileScreenInfo = ({ iconUrl, info }) => {
    return(
        <View style={styles.container}>
            <Image source={iconUrl} style={styles.icon} />
            <Text style={styles.infoText}>{info}</Text>
        </View>
    )
}

export default ProfileScreenInfo
