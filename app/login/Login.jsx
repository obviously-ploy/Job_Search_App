import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './login.style'
import { COLORS, icons, images } from "../../constants";
import LoginPageField from '../../components/common/cards/login/LoginPageField';


const LoginPage = () => {

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <LoginPageField
                iconUrl = {icons.email}
                fieldName = {'Email'}
                isSecureText = {false}
            />
            <LoginPageField
                iconUrl = {icons.padlock}
                fieldName = {'Password'}
                isSecureText = {true}
            />
        </SafeAreaView>
    )
}

export default LoginPage