import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './css/main-page-styles'

export default ({navigation}) => {

    const [steps, setSteps] = useState(0);

    const [money, setMoney] = useState(0);

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

                <View 
                    style = {styles.refresh_bar} 
                    onClick = {() => setSteps(steps+1)}
                >
                    <IoniconsIcon
                        name = "refresh"
                        size = {40}
                        style = {styles.refresh}
                    />

                </View>

                <View style = {styles.money_bar}>

                    <Text style = {[styles.money_text, {marginRight: '0.6em'}]}>
                        {money}
                    </Text>

                    <FA5Icon
                        name = "coins"
                        style = {styles.money_text}
                    />

                </View>

            </View>

            <View style = {styles.bottom_bar}>

                <View 
                    style = {styles.bar_element_view}
                    onClick={() => navigation.replace('Social')}
                >
                    <FA5Icon 
                        name = "walking" 
                        style = {styles.bar_element} 
                    />

                </View>

                <View style = {[styles.bar_element_view, styles.home_element_view]}>
                    
                    <FA5Icon
                        name = "home"
                        style = {styles.home_element}
                    />

                </View>

                <View 
                    style = {styles.bar_element_view} 
                    onClick={() => navigation.navigate('Settings')}
                >
                    
                    <IoniconsIcon
                        name = "settings-sharp"
                        style = {styles.bar_element} 
                    />

                </View>

            </View>
        </>
    );
}