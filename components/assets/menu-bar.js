import React from 'react';
import { View } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './css/menu-bar-styles';

export default (props) => {
    
    const navigation = props.navigation;
    
    return (
        <View style = {styles.bottom_bar}>

                <View 
                    style = {styles.bar_element_view}
                    onClick={() => navigation.replace('Avatar')}
                >
                    <FA5Icon 
                        name = "walking" 
                        style = {styles.bar_element} 
                    />

                </View>

                <View 
                    style = {[styles.bar_element_view, styles.home_element_view]}
                    onClick={() => navigation.replace('Home')}
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
    )
}