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
        marginTop: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'coloum',
        justifyContent: 'center',
        display: 'flex'
    },
    circle_text: {
        color: '#00D3FF',
        fontSize: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0.25em',
        marginBottom: '0.25em'
    },
    refresh_bar: {
        borderWidth: 10,
        borderRadius: 40,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2em'
    },
    refresh: {
        color: '#00D3FF',
        margin: 'auto'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        marginTop: '35%',
        backgroundColor: '#00D3FF',
        paddingLeft: '2em',
        paddingRight: '2em',
        height: '4em',
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex'
    },
    money_text: {
        color: '#8EE8FF',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
    },
    bottom_bar: {
        backgroundColor: '#00D3FF',
        flex: 1,
        display: 'inline',
        flexDirection: 'row',
        justifyContent: 'space-around',
        display: 'flex'
    },
    bar_element_view: {
        display: 'inline',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    home_element_view: {
        backgroundColor: '#8EE8FF',
        width: '25%',
        height: '80%',
        borderRadius: 20,
        display: 'block'
    },
    bar_element: {
        color: '#8EE8FF',
        fontSize: 40
    },
    home_element: {
        margin: 'auto',
        color: '#00D3FF',
        fontSize: 35 
    }
});