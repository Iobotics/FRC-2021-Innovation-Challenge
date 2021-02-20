import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

export default ({navigation}) => {
   return (
        <ScrollView
            style = {{
                backgroundColor: '#fff',
                flex: 1
            }}
        >

            <SettingsButton text = "Device" />

            <SettingsButton text = "Privacy" />

            <SettingsButton text = "Parental Controls" />

            <SettingsButton text = "Stats" />

       </ScrollView>
   ) 
}
