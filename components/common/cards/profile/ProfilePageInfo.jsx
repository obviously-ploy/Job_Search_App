// profilepageinfo.js
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './profilepageinfo.style.js'

const ProfilePageInfo = ({ iconUrl, info }) => {
    return(
        <View style={styles.container}>
            <Image source={iconUrl} style={styles.icon} />
            <Text style={styles.infoText}>{info}</Text>
        </View>
    )
}

export default ProfilePageInfo
