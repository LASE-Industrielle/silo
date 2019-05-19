import React from 'react';
import {View} from 'react-native';

import {Text} from 'native-base';

import styles from '../Styles';

const SiloData = (props) => {

    const {width,height,capacity, location} = props;

    return (
        <View style={styles.default}>
            <Text style={{fontWeight: 'bold'}}>Silo data:</Text>
            <Text>width: {width}</Text>
            <Text>height:{height}</Text>
            <Text>capacity:{capacity}</Text>
            <Text>location:{location}</Text>
        </View>
    )
}

export default SiloData;