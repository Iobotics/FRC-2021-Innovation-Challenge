import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        flex: 10,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 30,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    },
    circle_text: {
        color: '#00D3FF',
        fontSize: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Roboto-Regular'
    },
    refresh_bar: {
        borderWidth: 10,
        borderRadius: 40,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
    },
    refresh: {
        color: '#00D3FF',
        textAlign: 'center'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '2%',
        backgroundColor: '#00D3FF',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: 'Roboto-Regular'
    },
    money_text: {
        color: '#8EE8FF',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
    }
});