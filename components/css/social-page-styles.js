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
        borderWidth: 5,
        borderColor: '#00D3FF',
        borderStyle: 'dashed',
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
        marginBottom: '0.25em'
    },
    icons: {
        marginTop: 'auto',
        marginBottom: '0.75em',
        flexDirection: 'row',
        justifyContent: 'space-betwee',
        display: 'flex'
    },
    clothes_div: {
        height: '4em',
        width: '4em',
        borderRadius: '2em',
        backgroundColor: '#00D3FF',
        marginLeft: '1em'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
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
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    home_element_view: {
        backgroundColor: '#8EE8FF',
        width: '25%',
        height: '2.75em',
        borderRadius: 20,
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