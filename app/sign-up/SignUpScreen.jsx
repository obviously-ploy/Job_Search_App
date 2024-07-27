import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons} from "../../constants";
import styles from './signUpScreen.style';
import SignUpScreenInfo from "../../components/common/cards/sign-up/SignUpScreenInfo"
import LoginScreenBtn from '../../components/common/cards/login/LoginScreenBtn';

const SignUpScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: 'Sign Up'
                }}
            />
            <View style={styles.margins}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Personal Information</Text>
                </View>
                <SignUpScreenInfo
                    iconUrl={icons.user}
                    fieldName="Full Name"
                    isSecureText={false}
                />
                <SignUpScreenInfo
                    iconUrl={icons.email}
                    fieldName="Email"
                    isSecureText={false}
                />
                <SignUpScreenInfo
                    iconUrl={icons.phone}
                    fieldName="Phone Number"
                    isSecureText={false}
                />
                <SignUpScreenInfo
                    iconUrl={icons.padlock}
                    fieldName="Password"
                    isSecureText={true}
                />
                <SignUpScreenInfo
                    iconUrl={icons.padlock}
                    fieldName="Confirm Password"
                    isSecureText={true}
                />
                <LoginScreenBtn
                    btnColour={COLORS.primary}
                    handlePress={null}
                    text="Create Account"
                />
            </View>

        </SafeAreaView>
    );
}

export default SignUpScreen;
