import React from 'react';
import {View} from 'react-native';

import {Text} from 'native-base';

import styles from '../Styles';

const SensorData = (props) => {

    const {serialNumber,type} = props;

    return (
        <View style={styles.default}>
            <Text style={{fontWeight: 'bold'}}>Sensor data:</Text>
            <Text>serial number: {serialNumber}</Text>
            <Text>type:{type}</Text>
        </View>
    )
}

export default SensorData;