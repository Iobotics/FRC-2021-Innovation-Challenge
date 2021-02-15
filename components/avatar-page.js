import React from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './css/avatar-page-styles';

export default ({navigation}) => {

    return (
        <>
            <View style = {styles.main}>

                <View style= {styles.circle}>

                    <Text style = {styles.circle_text}>
                        Loading
                    </Text>

                </View>

                <View style = {styles.icons}>

                    <View style = {styles.clothes_div}>

                        <MCIcon
                            name = "hanger"
                            style = {[styles.money_text, {margin: 'auto'}]}
                        />

                    </View>

                    <View style = {styles.money_bar}>

                        <FA5Icon
                            name = "coins"
                            style = {styles.money_text}
                        />

                    </View>

                </View>

            </View>

            <View style = {styles.bottom_bar}>

                <View style = {styles.bar_element_view}>
                    <FA5Icon 
                        name = "walking" 
                        style = {styles.bar_element} 
                    />

                </View>

                <View 
                    style = {[styles.bar_element_view, styles.home_element_view]}
                    onClick = {() => navigation.replace('Home')}
                >
                    
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