import { StyleSheet } from 'react-native';

import { backColor, forColor } from '../../css/colors';

export default StyleSheet.create({
    bottom_bar: {
        backgroundColor: backColor,
        flex: 1,
        display: 'inline',
        flexDirection: 'row',
        justifyContent: 'space-around',
        display: 'flex'
    },
    bar_element_view: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    home_element_view: {
        backgroundColor: forColor,
        width: 100,
        height: '90%',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    bar_element: {
        color: forColor,
        fontSize: 35
    },
    home_element: {
        margin: 'auto',
        color: backColor,
        textAlign: 'center'
    }
});