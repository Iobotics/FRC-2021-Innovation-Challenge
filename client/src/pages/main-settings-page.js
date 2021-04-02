import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import SettingsButton from './assets/settings-button';

import bleManager from '../bluetooth/manager/bluetooth-manager';
import { backgroundColor } from './css/colors';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AuthManager from '../auth/auth-manager';

import { Platform } from 'react-native';

let uuid = undefined;

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

                if (!uuid) {
                    let active = true;

                    bleManager.startDeviceScan(null, null, async (error, device) => {
                        if (error) {
                            console.log(JSON.stringify(error));
                        } else {

                            if(!devices.includes(device.id)) {
                                devices = devices.concat(device.id);

                                if (device.name) {
                                    if (device.name.includes("Bluno") && ((Platform.OS != "ios") || device.isConnectable)) {
                                        bleManager.stopDeviceScan();

                                        active = false;
                                        uuid = device.id;

                                        console.log("Found the device!")
                                        const connectedDevice = await bleManager.connectToDevice(device.id, {})
        
                                        if (connectedDevice) {
                                            console.log(`Connected to device!`);
                                            await connectedDevice.discoverAllServicesAndCharacteristics();
                                        
                                            for (var service in connectedDevice.serviceUUIDs) {
                                                console.log(`Service ID: ${service}`);
                                            }

                                            const services = await connectedDevice.services();
                                            const characteristics = await services[0].characteristics();
                                            characteristics.forEach(characteristic => console.log(`Characteristic - ID ${characteristic.id}, Readable ${characteristic.isReadable}`))

                                            const characteristic = await characteristics[0].read();

                                            console.log(`Read Value ${characteristic.value}`)

                                            connectedDevice.cancelConnection();
                                        }
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
                        if (active) {
                            bleManager.stopDeviceScan();
                            console.log("Scan Stop");
                        }
                    }, 30000);
                } else { //Speed up reload
                    (async () => {
                        bleManager.stopDeviceScan();

                        const connectedDevice = await bleManager.connectToDevice(uuid, {})
        
                        if (connectedDevice) {
                            console.log(`Connected to device!`);
                            await connectedDevice.discoverAllServicesAndCharacteristics();
                                        
                            for (var service in connectedDevice.serviceUUIDs) {
                                console.log(`Service ID: ${service}`);
                            }

                            const services = await connectedDevice.services();
                            const characteristics = await services[0].characteristics();
                            characteristics.forEach(characteristic => console.log(`Characteristic - ID ${characteristic.id}, Readable ${characteristic.isReadable}`))

                            const characteristic = await characteristics[0].read();

                            console.log(`Read Value ${characteristic.value}`)

                            connectedDevice.cancelConnection();
                        }
                    })();
                }
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