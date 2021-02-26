import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

import { bleManager } from '../app/App';

export default ({navigation}) => {
   return (
        <ScrollView
            style = {{
                backgroundColor: '#fff',
                flex: 1
            }}
        >

            <TouchableOpacity onPress = {() => {
                bleManager.startDeviceScan(null, null, (error, device) => {
                    console.log(error);
                    console.log(device);

                    bleManager.stopDeviceScan();
                });
            }}>
                <SettingsButton text = "Device" />
            </TouchableOpacity>

            <SettingsButton text = "Privacy" />

            <SettingsButton text = "Parental Controls" />

            <SettingsButton text = "Stats" />

       </ScrollView>
   ) 
}
