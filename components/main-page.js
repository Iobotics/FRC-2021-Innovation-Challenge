import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default ({navigation}) => {

    const [steps, setSteps] = useState(0);

    return (
        <>
            <View style = {styles.main}>
                <View style= {styles.circle}>
                    <Text style={{
                        textAlign: 'center'
                    }}>
                        {steps}
                    </Text>
                </View>
            </View>

            <View style = {styles.bottom_bar}>

                <View style = {styles.bar_element_view}>
                    <FA5Icon 
                        name = "walking" 
                        size = {80} 
                        style = {styles.bar_element} 
                        onClick={() => navigation.replace('Social')}
                    />
                </View>

                <View style = {styles.bar_element_view, styles.home_element_view}>
                    <FA5Icon
                        name = "home"
                        size = {80}
                        style = {styles.bar_element, styles.home_element}
                    />
                </View>

                <View style = {styles.bar_element_view}>
                    <IoniconsIcon
                        name = "settings-sharp"
                        size = {80} 
                        style = {styles.bar_element} 
                        onClick={() => navigation.navigate('Settings')}
                    />
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        flex: 15,
    },
    circle: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 30,
        borderColor: '#00D3FF',
        backgroundColor: '#8EE8FF',
        marginTop: '4%',
        marginLeft: 'auto',
        marginRight: 'auto'
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
        paddingVertical: '10',
        width: 150,
        height: 100,
        borderRadius: 20,
    },
    bar_element: {
        color: '#8EE8FF',
    },
    home_element: {
        color: '#00D3FF',
        margin: 'auto'
    }
});