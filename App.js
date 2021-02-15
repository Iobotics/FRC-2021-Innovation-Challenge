import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './components/main-page';
import AvatarPage from './components/avatar-page';
import MainSettingsPage from './components/main-settings-page';

const Stack = createStackNavigator();

export default function App() {

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
