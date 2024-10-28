import React, { useState } from 'react';
import { View, SafeAreaView, Text, ActivityIndicator, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS, icons } from "../../constants";
import styles from './signUpScreen.style';
import SignUpScreenInfo from "../../components/common/cards/sign-up/SignUpScreenInfo";
import LoginScreenBtn from '../../components/common/cards/login/LoginScreenBtn';
import useHandleSignUp from '../../utils/useHandleSignUp';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { handleSignUp, validationErrors, userCreationError, isLoading } = useHandleSignUp();

  const onSubmit = () => {
    handleSignUp(fullName, email, phone, password, confirmPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: 'Sign Up'
        }}
      />
      {
        isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : userCreationError ? (
          <Text>Something Went Wrong: {userCreationError}</Text>
        ) : (
          <View style={styles.margins}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Personal Information</Text>
            </View>
            <SignUpScreenInfo
              iconUrl={icons.user}
              fieldName="Full Name"
              isSecureText={false}
              onChangeText={setFullName}
              errorText={validationErrors.fullName}
            />
            <SignUpScreenInfo
              iconUrl={icons.email}
              fieldName="Email"
              isSecureText={false}
              onChangeText={setEmail}
              errorText={validationErrors.email}
            />
            <SignUpScreenInfo
              iconUrl={icons.phone}
              fieldName="Phone Number"
              isSecureText={false}
              onChangeText={setPhone}
              errorText={validationErrors.phone}
            />
            <SignUpScreenInfo
              iconUrl={icons.padlock}
              fieldName="Password"
              isSecureText={true}
              onChangeText={setPassword}
              errorText={validationErrors.password}
            />
            <SignUpScreenInfo
              iconUrl={icons.padlock}
              fieldName="Confirm Password"
              isSecureText={true}
              onChangeText={setConfirmPassword}
              errorText={validationErrors.confirmPassword}
            />
            <LoginScreenBtn
              btnColour={COLORS.primary}
              handlePress={onSubmit}
              text="Create Account"
            />
          </View>
        )
      }
    </SafeAreaView>
  );
}

export default SignUpScreen;
