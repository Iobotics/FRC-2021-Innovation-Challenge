import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './css/main-page-styles';

import MenuBar from './assets/menu-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

import VitalsManager from '../storage/managers/vitals-manager';
import { getValues, setValues } from '../firestore/firestore-manager';

export default ({navigation}) => {

    const [steps, setSteps] = useState(0);

    const [money, setMoney] = useState(0);

    useEffect(() => {
        getValues().then(firebase => {
            if (!firebase.exists) {
                VitalsManager.getSteps(setSteps);
            } else {
                const data = firebase.data;
                setSteps(data.steps);
                setMoney(data.money);
            }
        }).catch(err => {
            console.warn(err);
            VitalsManager.getSteps(setSteps);
        })
    }, []);

    return (
        <>
            <View style = {styles.main}>

                <View style= {styles.circle}>
                    
                    <Text style={styles.circle_text}>
                        {steps}
                    </Text>

                    <FA5Icon
                        name = "shoe-prints"
                        style = {styles.circle_text}
                    />

                </View>

                <TouchableOpacity onPress = {() => {
                    let newSteps = steps+1;

                    setSteps(newSteps);

                    VitalsManager.inputValues(newSteps);

                    setValues(newSteps, money);
                }}>

                    <View 
                        style = {styles.refresh_bar} 
                    >
                        <IoniconsIcon
                            name = "refresh"
                            size = {40}
                            style = {styles.refresh}
                        />

                    </View>
                    
                </TouchableOpacity>

                <View style = {styles.money_bar}>

                    <Text style = {[styles.money_text, {marginRight: 15}]}>
                        {money}
                    </Text>

                    <FA5Icon
                        name = "coins"
                        style = {styles.money_text}
                    />

                </View>

            </View>

            <MenuBar navigation = {navigation}/>

        </>
    );
}