import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        height: '3.5em',
        borderRadius: 20,
    },
    bar_element: {
        color: '#8EE8FF',
        fontSize: 50
    },
    home_element: {
        margin: 'auto',
        color: '#00D3FF',
        fontSize: 45 
    }
});