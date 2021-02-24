import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './css/main-page-styles';

import MenuBar from './assets/menu-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getStepsGQL, setStepsGQL } from '../network/graphql/steps';
import { getMoneyGQL, setMoneyGQL } from '../network/graphql/money';

export default ({navigation}) => {

    const [steps, setSteps] = useState(0);

    const [money, setMoney] = useState(0);

    useEffect(() => { 
        getStepsGQL().then(data => {
            setSteps(data); 
          
            console.log("Current steps: " + data)
        });

        getMoneyGQL().then(data => {
            setMoney(data);

            console.log("Current money: " + data)
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

                <TouchableOpacity onPress = {() => setStepsGQL(steps+1).then(data => {
                    setSteps(data); 
          
                    console.log("Updated steps to: " + data)
                })}>

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