import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

import bleManager from '../bluetooth/manager/bluetooth-manager';
import { backgroundColor } from './css/colors';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AuthManager from '../auth/auth-manager';

export default ({navigation}) => {
   return (
        <ScrollView
            style = {{
                backgroundColor: backgroundColor,
                flex: 1
            }}
        >

            <TouchableOpacity onPress = {() => {
                const devices = Array(0);

                console.log("Scan Start");

                bleManager.startDeviceScan(null, null, (error, device) => {
                    if (error) {
                        console.log(error);
                    } else {

                        if(!devices.includes(device.id)) {
                            devices.concat(device.id);

                            if (device.name) {
                                if (device.name == "Bluno" && device.isConnectable) {
                                    bleManager.connectToDevice(device.id, {}).then(device => console.log("Connected to device!")).catch(error => console.warn(error));
                                    bleManager.stopDeviceScan();
                                    console.log("Found the device!")
                                } else {
                                    console.log(`Found device with name: ${device.name}`);
                                }
                            } else {
                                console.log(`Found device with ID: ${device.id}`);
                            }
                        } else {
                            console.log("Skipping already scanned device.");
                        }
                    }
                });

                setTimeout(() => {
                    bleManager.stopDeviceScan();
                    console.log("Scan Stop");
                }, 5000);
            }}>
                <SettingsButton text = "Device" />
            </TouchableOpacity>

            <SettingsButton text = "Privacy" />

            <SettingsButton text = "Parental Controls" />

            <TouchableOpacity onPress = {() => {GoogleSignin.signOut(); AuthManager.setUser(null)}}>
                <SettingsButton text = "Stats" />
            </TouchableOpacity>

       </ScrollView>
   ) 
}
