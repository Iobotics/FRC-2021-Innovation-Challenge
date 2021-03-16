import { StyleSheet } from 'react-native';
import { backColor, forColor } from '../../css/colors';

export default StyleSheet.create({
    view: {
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowColor: forColor,
        backgroundColor: backColor,
        borderRadius: 25,
        width: '75%',
        height: 130,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        margin: 'auto',
        fontSize: 40,
        color: forColor,
        fontFamily: 'AcuminPro-Regular',
        textAlign: 'center'
    }
})