import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import styles from './signUpScreenInfo.style.js';
import icons from '../../../../constants/icons.js';

const SignUpScreenInfo = ({ iconUrl, fieldName, isSecureText, onChangeText, errorText }) => {
    return (
        <View>
            <View style={errorText ? styles.errorFieldContainer : styles.fieldContainer}>
                <Image source={iconUrl} style={styles.fieldIcon} />
                <TextInput
                    style={styles.fieldInput}
                    placeholder={fieldName}
                    secureTextEntry={isSecureText}
                    blurOnSubmit={true}
                    autoCapitalize='none'
                    onChangeText={onChangeText}
                />
            </View>
            {errorText ? (
                <View style={styles.errorMessageContainer}>
                    <Image source={icons.warning} style={styles.errorIcon} />
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            ) : null}
        </View>
    );
}

export default SignUpScreenInfo;
