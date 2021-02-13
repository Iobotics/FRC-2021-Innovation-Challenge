import React from 'react';
import Icon from "react-native-vector-icons/AntDesign";

export default ({navigation}) => {

    return (
        <>
            <Icon
                name = "smileo"
            />
            <button
                onClick = {() => navigation.replace('Home')}
            >
                Go Back
            </button>
        </>
    );
}