
import React from 'react'
import { View, Image, TextInput, Text} from 'react-native'
import styles from './loginScreenField.style'

const LoginScreenField = ({iconUrl, fieldName, isSecureText}) => {

    return (
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

export default LoginScreenField