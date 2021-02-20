import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowColor: '#8EE8FF',
        backgroundColor: '#00D3FF',
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
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        textAlign: 'center'
    }
})