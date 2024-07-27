import React from 'react'
import { View, TextInput, Image } from 'react-native'
import styles from './signUpScreenInfo.style.js'

const SignUpScreenInfo = ({ iconUrl, fieldName, isSecureText }) => {
    return(
        <View style={styles.fieldContainer}>
            <Image source={iconUrl} style={styles.fieldIcon}/>
            <TextInput 
                style = {styles.fieldInput}
                placeholder = {fieldName}
                secureTextEntry = {isSecureText}
                blurOnSubmit = {true}
                autoCapitalize='none'
            />
        </View>
    )
}

export default SignUpScreenInfo
