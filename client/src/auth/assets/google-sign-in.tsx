import React from 'react';
import { StyleSheet } from 'react-native'

import AntIcon from 'react-native-vector-icons/AntDesign';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Props } from './sign-in-types';

import {backColor, backgroundColor} from '../../pages/css/colors';

export default (props: Props) => {
    return (
        <AntIcon.Button onPress={() => onGoogleButtonPress().then(creds => {
            props.onClick(creds.user);
          })} style = {styles.signInButton} underlayColor={backgroundColor} name="google">Sign in with Google</AntIcon.Button>
    );
}

async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

const styles = StyleSheet.create({
    signInButton: {
      //margin: 'auto',
      //marginHorizontal: '30%',
      backgroundColor: backColor,
      width: '100%',
      //color: forColor
    }
  });