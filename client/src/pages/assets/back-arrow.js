import React from 'react';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './css/back-button-styles';

export default () => {

    return (
        <FA5Icon
            name = "arrow-left"
            style = {styles.arrow}
        />
    
    )

};