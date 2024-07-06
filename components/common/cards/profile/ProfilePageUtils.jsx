import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './profilepage.style.js'

const ProfilePageInfo = ({ iconUrl, info }) => {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={iconUrl} style={styles.icon} />
                <Text style={styles.infoText}>{info}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfilePageInfo