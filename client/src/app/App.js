import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, Platform } from 'react-native';

import BlePermissions from '../bluetooth/permissions/bluetooth-permissions';

import MainPage from '../pages/main-page';
import AvatarPage from '../pages/avatar-page';
import MainSettingsPage from '../pages/main-settings-page';

import BackArrow from '../pages/assets/back-arrow';

import { backgroundColor, backColor } from '../pages/css/colors';

import SQLManager from '../storage/SQL-manager';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    SQLManager.open();
    BlePermissions();
  }, []);

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
              headerTitleStyle: styles.headerText,
              headerStyle: styles.header
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
  
}

const styles = StyleSheet.create({
  headerText : {
    color: backColor,
    fontSize: 35,
    fontFamily: 'Acumin-Pro'
  },
  header: {
    backgroundColor: backgroundColor
  }
});