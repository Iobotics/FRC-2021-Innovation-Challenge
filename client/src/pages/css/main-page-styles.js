import { StyleSheet } from 'react-native'
import { backgroundColor, backColor, forColor } from "./colors";

export default StyleSheet.create({
    main: {
        backgroundColor: backgroundColor,
        flex: 10,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 30,
        borderColor: backColor,
        backgroundColor: forColor,
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
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Acumin-Pro'
    },
    refresh_bar: {
        borderWidth: 10,
        borderRadius: 40,
        borderColor: backColor,
        backgroundColor: forColor,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
    },
    refresh: {
        color: backColor,
        textAlign: 'center'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '2%',
        backgroundColor: backColor,
        paddingLeft: '5%',
        paddingRight: '5%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: 'Acumin-Pro'
    },
    money_text: {
        color: forColor,
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
    }
});