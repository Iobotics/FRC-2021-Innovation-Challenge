import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, Button, View, Text } from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import BlePermissions from '../bluetooth/permissions/bluetooth-permissions';

import MainPage from '../pages/main-page';
import AvatarPage from '../pages/avatar-page';
import MainSettingsPage from '../pages/main-settings-page';

import BackArrow from '../pages/assets/back-arrow';

import { backgroundColor, backColor, forColor } from '../pages/css/colors';

import AuthManager from '../auth/auth-manager';

const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: '84116326670-4uq9q4a0c523ok9k16k1n8cbg4pb6m43.apps.googleusercontent.com'
});

export default class App extends React.Component {

  constructor() {
    super();
    AuthManager.addRender(this);

    this.state = {update: false}

    GoogleSignin.isSignedIn().then(signedIn => {
      if (signedIn) {
        this.state.update = true;

        GoogleSignin.getCurrentUser().then(user => AuthManager.setUser(user));
      }
    })
  }

  componentDidMount() {
    BlePermissions();
  }

  callback() {
    this.setState({update: !this.state.update})
  }

  render() {
    
    
    return this.state.update ? (
      <>
        <StatusBar animated = {true} barStyle = "light-content"/>
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
      <View>
        <SignIn onClick={() => onGoogleButtonPress().then(creds => { 
  
          AuthManager.setUser(creds.user);
  
          console.log(`Logged in user ${creds.user.uid} with email ${creds.user.email}.`)
        })}/>
      </View>
    );
  }
  
  
}

const styles = StyleSheet.create({
  headerText : {
    color: backColor,
    fontSize: 35,
    fontFamily: 'Acumin-Pro'
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
    fontFamily: 'Acumin-Pro'
  },
  signInButton: {
    margin: 'auto',
    marginHorizontal: '10%',
    backgroundColor: backColor,
    color: forColor
  }
});

function SignIn(props) {
  return (
    <View style = {styles.signInView}>
      <Text style = {[styles.signInText, {fontSize:30}]}>Welcome to PiliPlay!</Text>
      <Text style = {[styles.signInText, {fontSize:20}]}>Please sign in before continuing!</Text>
      <Button onPress={() => props.onClick()} title = "Sign-In with Google" style = {styles.signInButton}/>
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