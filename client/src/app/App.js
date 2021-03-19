import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, Button, View, Text, Platform } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import BlePermissions from '../bluetooth/permissions/bluetooth-permissions';

import MainPage from '../pages/main-page';
import AvatarPage from '../pages/avatar-page';
import MainSettingsPage from '../pages/main-settings-page';

import BackArrow from '../pages/assets/back-arrow';

import { backgroundColor, backColor, forColor } from '../pages/css/colors';

import AuthManager from '../auth/auth-manager';
import AppleSignIn from '../auth/assets/apple-sign-in';

const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: '84116326670-4uq9q4a0c523ok9k16k1n8cbg4pb6m43.apps.googleusercontent.com'
});

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      update: false
    }

    this.callback = this.callback.bind(this);

    /*firestore().settings({
      host: '10.0.0.2:8080',
      ssl: false
    });*/ //Set Firestore to use dev enviroment
  }

  componentDidMount() {
    BlePermissions();

    GoogleSignin.isSignedIn().then(signedIn => {
      if (signedIn) {
        GoogleSignin.getCurrentUser()
        .then(user => { if (user) return auth.GoogleAuthProvider.credential(user.idToken)})
        .then(user => { if (user) return auth().signInWithCredential(user)})
        .then(user => { 
          if (user) { 
            AuthManager.setUser(user.user);
          } 
        })
        .catch(error => console.warn(error));
      }
    });

    AuthManager.addRender(this.callback);
  }

  callback() {
    this.setState({update: !this.state.update})
  }

  render() {
    
    return this.state.update ? (
      <>
        <StatusBar animated = {true} barStyle = "dark-content"/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name = "Home"
              component = {MainPage}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name = "Avatar"
              component = {AvatarPage}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen
              name = "Settings"
              component = {MainSettingsPage}
              options = {{
                headerBackImage: BackArrow,
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerText,
                headerStyle: styles.header
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    ) : (
      <>
        <View>
          <SignIn onClick={user => { 
  
            AuthManager.setUser(user);
  
            console.log(`Logged in user ${user.uid} with email ${user.email}.`)
          }}/>
        </View>
      </>
    );
  }
  
  
}

const styles = StyleSheet.create({
  headerText : {
    color: backColor,
    fontSize: 35,
    fontFamily: 'AcuminPro-Regular'
  },
  header: {
    backgroundColor: backgroundColor
  },
  signInView: {
    backgroundColor: backgroundColor,
    height: '100%'
  },
  signInText: {
    color: backColor,
    textAlign: 'center',
    fontFamily: 'AcuminPro-Regular'
  },
  signInButton: {
    //margin: 'auto',
    //marginHorizontal: '10%',
    backgroundColor: backColor,
    //color: forColor
  }
});

function SignIn(props) {
  return (
    <View style = {styles.signInView}>
      <Text style = {[styles.signInText, {fontSize:30}]}>Welcome to PiliPlay!</Text>
      <Text style = {[styles.signInText, {fontSize:20}]}>Please sign in before continuing!</Text>
      <Button onPress={() => onGoogleButtonPress().then(creds => {
        props.onClick(creds.user);
      })} style = {styles.signInButton} title="Sign In With Google!">Sign In With Google!</Button>
      {
        Platform.OS === "ios" ? (<AppleSignIn onClick={user => props.onClick(user)}/>) : (<></>)
      }
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