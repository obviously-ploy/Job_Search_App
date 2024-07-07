
import React from 'react'
import { View, Image, TextInput} from 'react-native'
import styles from './loginpagefield.style'

const LoginPageField = ({iconUrl, fieldName, isSecureText}) => {

    return (
        <View style={styles.fieldContainer}>
            <View style={styles.fieldWrapper}>
                <Image source={iconUrl} style={styles.icon}/>
                <TextInput 
                    style = {styles.fieldInput}
                    placeholder = {fieldName}
                    secureTextEntry = {isSecureText}
                />
            </View>
        </View>
    )
}

export default LoginPageField