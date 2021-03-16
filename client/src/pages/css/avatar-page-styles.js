import { StyleSheet } from 'react-native'

import {backgroundColor, backColor, forColor } from './colors';

export default StyleSheet.create({
    main: {
        backgroundColor: backgroundColor,
        flex: 10,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 5,
        borderColor: backColor,
        borderStyle: 'dashed',
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    },
    circle_text: {
        color: backColor,
        fontSize: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'AcuminPro-Regular'
    },
    icons: {
        marginTop: 'auto',
        marginBottom: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex'
    },
    clothes_div: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: backColor,
        marginLeft: '5%'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        backgroundColor: backColor,
        paddingLeft: '5%',
        paddingRight: '5%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex'
    },
    money_text: {
        color: forColor,
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
        fontFamily: 'AcuminPro-Regular'
    },
});