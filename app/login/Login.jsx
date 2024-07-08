import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './login.style'
import { COLORS, icons, images } from "../../constants";
import LoginPageField from '../../components/common/cards/login/LoginPageField';
import {Stack} from 'expo-router';


const LoginPage = () => {

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={styles.container}>
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
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default LoginPage