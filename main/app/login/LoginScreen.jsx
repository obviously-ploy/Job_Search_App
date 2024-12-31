import React, { useState } from 'react';
import { View, SafeAreaView, ActivityIndicator, Image, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from './login.style';
import { COLORS, icons } from "../../constants";
import LoginScreenBtn from '../../components/common/cards/login/LoginScreenBtn';
import SignUpScreenInfo from '../../components/common/cards/sign-up/SignUpScreenInfo';
import handleUserLogin from '../../utils/handleUserLogin';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin, inputErrors, loginError, isLoading } = handleUserLogin();

  const onSubmit = () => {
    handleLogin(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: ""
        }}
      />
      {
        isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <View style={styles.container}>
            <SignUpScreenInfo
              iconUrl={icons.email}
              fieldName="Email"
              isSecureText={false}
              onChangeText={setEmail}
              errorText={inputErrors.email}
              isError={!!inputErrors.email}
            />
            <SignUpScreenInfo
              iconUrl={icons.padlock}
              fieldName="Password"
              isSecureText={true}
              onChangeText={setPassword}
              errorText={inputErrors.password}
              isError={!!inputErrors.password}
            />

            {loginError ? (
              <View style={styles.errorMessageContainer}>
                <Image source={icons.warning} style={styles.errorIcon} />
                <Text style={styles.errorText}>
                  Unable to log in. Please check your email and password, and try again.
                </Text>
              </View>
            ) : null}
            <LoginScreenBtn
              btnColour={COLORS.tertiary}
              handlePress={onSubmit}
              text={"Sign In"}
            />
            <LoginScreenBtn
              btnColour={COLORS.primary}
              handlePress={() => { router.push("../../sign-up/SignUpScreen") }}
              text={"Sign Up"}
            />
          </View>
        )
      }
    </SafeAreaView>
  );
}

export default LoginScreen;
