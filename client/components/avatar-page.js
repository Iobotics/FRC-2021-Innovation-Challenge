import React from 'react';
import { View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './css/avatar-page-styles';

import MenuBar from './assets/menu-bar';

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

            <MenuBar navigation = {navigation} />
        </>
    );
}