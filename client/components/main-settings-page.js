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

            <SettingsButton text = "Device" style = {{
                width: '80%',
                height: '20%'
            }} />

            <SettingsButton text = "Privacy" style = {{
                width: '80%',
                height: '20%'
            }} />

            <SettingsButton text = "Parental Controls" style = {{
                width: '80%',
                height: '20%'
            }} />

            <SettingsButton text = "Stats" style = {{
                width: '80%',
                height: '20%'
            }} />

       </View>
   ) 
}