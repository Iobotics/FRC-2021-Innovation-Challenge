import React from 'react';
import { View, Text } from 'react-native';

import styles from './css/settings-button-styles';

type Props = {
    text: string
}

export default (props: Props) => {

    return (
            <View style = {styles.view}>
                <Text style = {styles.text}>
                    {props.text}
                </Text>
            </View>
    )
}
