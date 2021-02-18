import React from 'react';
import { View, Text } from 'react-native';

import styles from './css/settings-button-styles';

export default (props) => {

    return (
        <>
            <View style = {styles.view}>
                <Text style = {styles.text}>
                    {props.text}
                </Text>
            </View>
        </>
    )
}
