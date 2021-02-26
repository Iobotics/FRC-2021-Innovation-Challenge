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
        borderWidth: 5,
        borderColor: '#00D3FF',
        borderStyle: 'dashed',
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
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Acumin-Pro'
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
        backgroundColor: '#00D3FF',
        marginLeft: '5%'
    },
    money_bar: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 'auto',
        backgroundColor: '#00D3FF',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex'
    },
    money_text: {
        color: '#8EE8FF',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 40,
        fontFamily: 'Acumin-Pro'
    },
});