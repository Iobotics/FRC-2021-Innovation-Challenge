import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import styles from './css/menu-bar-styles';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'> | StackNavigationProp<RootStackParamList, 'Avatar'>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default (props: Props) => {
    
    const navigation = props.navigation;

    const page = useRoute().name;
    
    return (
        <View style = {styles.bottom_bar}>

                <TouchableOpacity onPress = {() =>  {navigation.navigate('Avatar')}} activeOpacity = {0.5} disabled = {page == 'Avatar'} >

                    <View 
                        style = {styles.bar_element_view}
                    >
                        <FA5Icon 
                            name = "walking" 
                            style = {styles.bar_element} 
                        />

                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress = {() => {navigation.navigate('Home')}} activeOpacity = {0.5} disabled = {page == 'Home'}>

                    <View 
                        style = {[styles.bar_element_view, styles.home_element_view]}
                    >
                    
                        <FA5Icon
                            name = "home"
                            style = {[styles.bar_element, styles.home_element]}
                        />

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress = {() => navigation.navigate('Settings')} activeOpacity = {0.5}>
                    
                    <View 
                        style = {styles.bar_element_view} 
                    >
                    
                        <IoniconsIcon
                            name = "settings-sharp"
                            style = {styles.bar_element} 
                        />

                    </View>
                    
                </TouchableOpacity>

            </View>
    )
}