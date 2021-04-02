import React from 'react';

import { View, Text, Platform, StyleSheet } from 'react-native';

import { FirebaseAuthTypes } from '@react-native-firebase/auth'

import AppleSignIn from '../auth/assets/apple-sign-in';
import GoogleSignIn from '../auth/assets/google-sign-in';

import AuthManager from '../auth/auth-manager';

import { backColor, backgroundColor } from './css/colors';


export default function SignIn() {
    return (
      <View style = {styles.signInView}>
        <Text style = {[styles.signInText, {fontSize:30}]}>Welcome to PiliPlay!</Text>
        <Text style = {[styles.signInText, {fontSize:20}]}>Please sign in before continuing!</Text>
        <View style = {styles.authTypesView}>
          <GoogleSignIn onClick={signInHandler}/>
          {
            Platform.OS === "ios" ? (<AppleSignIn onClick={signInHandler}/>) : (<></>) //Add Apple Auth due to App Store Requirement
          }
        </View>
      </View>
    )
}

const signInHandler = (user : FirebaseAuthTypes.User) => {
  AuthManager.setUser(user);
  
  console.log(`Logged in user ${user.uid} with email ${user.email}.`)
}

const styles = StyleSheet.create({
  signInView: {
    backgroundColor: backgroundColor,
    height: '100%'
  },
  signInText: {
    color: backColor,
    textAlign: 'center',
    fontFamily: 'AcuminPro-Regular'
  },
  authTypesView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  }
});