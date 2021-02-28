import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

import bleManager from '../bluetooth/manager/bluetooth-manager';

import { backgroundColor } from './css/colors';

export default ({navigation}) => {
   return (
        <ScrollView
            style = {{
                backgroundColor: backgroundColor,
                flex: 1
            }}
        >

            <TouchableOpacity onPress = {() => {
                bleManager.startDeviceScan(null, null, (error, device) => {
                    console.log(device.id);

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
