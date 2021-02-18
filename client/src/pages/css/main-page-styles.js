import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        flex: 15,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 30,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginTop: '2em',
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
        marginTop: '0.25em',
        marginBottom: '0.25em',
        fontFamily: 'Roboto_Regular'
    },
    refresh_bar: {
        borderWidth: 10,
        borderRadius: 40,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '0.5em'
    },
    refresh: {
        color: '#00D3FF',
        margin: 'auto'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '0.75em',
        backgroundColor: '#00D3FF',
        paddingLeft: '2em',
        paddingRight: '2em',
        height: '4em',
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: 'Roboto_Regular'
    },
    money_text: {
        color: '#8EE8FF',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
    }
});