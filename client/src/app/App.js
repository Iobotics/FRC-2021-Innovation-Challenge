import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, Platform } from 'react-native';

import BlePermissionsAndroid from '../bluetooth/permissions/bluetooth-permissions';

import MainPage from '../pages/main-page';
import AvatarPage from '../pages/avatar-page';
import MainSettingsPage from '../pages/main-settings-page';

import BackArrow from '../pages/assets/back-arrow';

const Stack = createStackNavigator();

export default function App() {

  if (Platform.OS = "android")
    BlePermissionsAndroid();

  return (
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
              headerTitleStyle: styles.headerText
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
  
}

const styles = StyleSheet.create({
  headerText : {
    color: '#8EE8FF',
    fontSize: 30,
    fontFamily: 'Roboto-Regular'
  }
});