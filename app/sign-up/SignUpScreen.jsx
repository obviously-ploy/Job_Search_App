import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons} from "../../constants";
import styles from './signUpScreen.style';
import SignUpScreenInfo from "../../components/common/cards/sign-up/SignUpScreenInfo"
import LoginScreenBtn from '../../components/common/cards/login/LoginScreenBtn';
import useHandleSignUp from '../../utils/useHandleSignUp';
import useValidateSignUp from '../../utils/useValidateSignUp';

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({})
    
    const onSubmit = (fullName, email, phone, password, confirmPassword) =>{
        const validationErrors = useValidateSignUp(fullName, email, phone, password, confirmPassword);
        setErrors(validationErrors)
        

        // if(Object.keys(validationErrors).length === 0){
        //     console.log("HANDLE SIGN UP IS CALLED")
        //     useHandleSignUp()
        // }
    }

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
                    onChangeText={setFullName}
                    errorText={errors.fullName}
                />
                <SignUpScreenInfo
                    iconUrl={icons.email}
                    fieldName="Email"
                    isSecureText={false}
                    onChangeText={setEmail}
                    errorText={errors.email}
                />
                <SignUpScreenInfo
                    iconUrl={icons.phone}
                    fieldName="Phone Number"
                    isSecureText={false}
                    onChangeText={setPhone}
                    errorText={errors.phone}
                />
                <SignUpScreenInfo
                    iconUrl={icons.padlock}
                    fieldName="Password"
                    isSecureText={true}
                    onChangeText={setPassword}
                    errorText={errors.password}
                />
                <SignUpScreenInfo
                    iconUrl={icons.padlock}
                    fieldName="Confirm Password"
                    isSecureText={true}
                    onChangeText={setConfirmPassword}
                    errorText={errors.confirmPassword}
                />
                <LoginScreenBtn
                    btnColour={COLORS.primary}
                    handlePress={() =>  onSubmit(fullName, email, phone, password, confirmPassword)}
                    text="Create Account"
                />
            </View>

        </SafeAreaView>
    );
}

export default SignUpScreen;
