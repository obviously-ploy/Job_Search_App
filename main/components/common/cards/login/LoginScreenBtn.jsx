import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'


import styles from './loginScreenBtn.style'

const LoginScreenBtn = ({btnColour, handlePress, text}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.buttonContainer(btnColour)}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default LoginScreenBtn