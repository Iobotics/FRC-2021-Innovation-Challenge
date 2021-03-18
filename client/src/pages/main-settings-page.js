import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

import bleManager from '../bluetooth/manager/bluetooth-manager';
import { backgroundColor } from './css/colors';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AuthManager from '../auth/auth-manager';

import {Platform} from 'react-native';

export default ({navigation}) => {
   return (
        <ScrollView
            style = {{
                backgroundColor: backgroundColor,
                flex: 1
            }}
        >

            <TouchableOpacity onPress = {() => {
                let devices = Array(0);

                console.log("Scan Start");

                bleManager.startDeviceScan(null, null, (error, device) => {
                    if (error) {
                        console.log(JSON.stringify(error));
                    } else {

                        if(!devices.includes(device.id)) {
                            devices = devices.concat(device.id);

                            if (device.name) {
                                if (device.name.includes("Bluno") && ((Platform.OS != "ios") || device.isConnectable)) {
                                    bleManager.stopDeviceScan();
                                    bleManager.connectToDevice(device.id, {})
                                    .then(device => {
                                        console.log(`Connected to device!`);
                                        return device.discoverAllServicesAndCharacteristics();
                                    })
                                    .then(device => device.services())
                                    .then(services => services.forEach(service => console.log(service.id)))
                                    .catch(error => console.warn(JSON.stringify(error)));
                                    console.log("Found the device!")
                                } else {
                                    console.log(`Found device with name: ${device.name} ${Platform.OS == "ios" ? `, is connectable ${device.isConnectable}` : ""}`);
                                }
                            } else {
                                console.log(`Found device with ID: ${device.id}`);
                            }
                        } else {
                            //console.log("Skipping already scanned device.");
                        }
                    }
                });

                setTimeout(() => {
                    bleManager.stopDeviceScan();
                    console.log("Scan Stop");
                }, 30000);
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