import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import MainPage from './components/main-page';
import AvatarPage from './components/avatar-page';
import MainSettingsPage from './components/main-settings-page';

import BackArrow from './components/assets/back-arrow';

const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf')
  })

  return (
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
  );
  
}

const styles = StyleSheet.create({
  headerText : {
    color: '#8EE8FF',
    fontSize: 30,
    fontFamily: 'Roboto_Regular'
  }
});