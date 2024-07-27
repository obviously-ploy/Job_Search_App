import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './login.style'
import { COLORS, icons, images } from "../../constants";
import LoginScreenField from '../../components/common/cards/login/LoginScreenField';
import {Stack} from 'expo-router';
import LoginScreenBtn from '../../components/common/cards/login/LoginScreenBtn';


const LoginScreen = () => {

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
                <LoginScreenField
                    iconUrl = {icons.email}
                    fieldName = {'Email'}
                    isSecureText = {false}
                />
                <LoginScreenField
                    iconUrl = {icons.padlock}
                    fieldName = {'Password'}
                    isSecureText = {true}
                />
                <LoginScreenBtn
                    btnColour={COLORS.tertiary}
                    handlePress={null}
                    text={"Sign Up"}
                />
                <LoginScreenBtn
                    btnColour={COLORS.primary}
                    handlePress={null}
                    text={"Sign In"}
                />
            </View>
            
        </SafeAreaView>
    )
}

export default LoginScreen