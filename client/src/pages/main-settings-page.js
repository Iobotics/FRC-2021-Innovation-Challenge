import React from 'react';
import { View } from 'react-native';

import SettingsButton from './assets/settings-button';

export default ({navigation}) => {
   return (
        <View
            style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundColor: '#fff',
                flex: 1
            }}
        >

            <SettingsButton text = "Device" />

            <SettingsButton text = "Privacy" />

            <SettingsButton text = "Parental Controls" />

            <SettingsButton text = "Stats" />

       </View>
   ) 
}
