import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './css/main-page-styles';

import MenuBar from './assets/menu-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

                <TouchableOpacity onPress = {() => setSteps(steps+1)}>

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