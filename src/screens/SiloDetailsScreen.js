import React from 'react';
import {View} from 'react-native';
import {Container,  Content} from 'native-base';
import SiloDetails from '../components/SiloDetails';
import Styles from '../Styles';

const SiloDetailsScreen = (props) => {

    return (
        <View style={Styles.default}>

                    <SiloDetails percentage={props.navigation.getParam('percentage',0)}/>
        </View>
    )
}

export default SiloDetailsScreen;