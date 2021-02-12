import React from 'react';

export default ({navigation}) => {

    return (
        <button
            onClick = {() => navigation.navigate('Social', {})}
        >Click to go to social page.</button>
    );
}