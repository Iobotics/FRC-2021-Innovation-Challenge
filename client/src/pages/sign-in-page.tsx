import React from 'react';

import { View, Text, Platform } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import AppleSignIn from '../auth/assets/apple-sign-in';

export type Props = {
    onClick: (n: FirebaseAuthTypes.User) => undefined 
}

export default function SignIn(props: Props) {
    return (
      <View style = {styles.signInView}>
        <Text style = {[styles.signInText, {fontSize:30}]}>Welcome to PiliPlay!</Text>
        <Text style = {[styles.signInText, {fontSize:20}]}>Please sign in before continuing!</Text>
        <View>
          <AntIcon.Button onPress={() => onGoogleButtonPress().then(creds => {
            props.onClick(creds.user);
          })} style = {styles.signInButton} name="google">Sign in with Google</AntIcon.Button>
          {
            Platform.OS === "ios" ? (<AppleSignIn onClick={user => props.onClick(user)}/>) : (<></>)
          }
        </View>
      </View>
    )
}

async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}