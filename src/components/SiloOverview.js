import React from 'react';
import {View} from 'react-native';

import {Text} from 'native-base';

import styles from '../Styles';

const SiloOverview = (props) => {

    const {silo} = props;


    return (
        <View style={styles.default}>
            <View>
                <View style={{flex: 1, width: '100%', height: 200, flexDirection: 'row'}}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 100
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>{silo.percentage}%</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#8bbfc0'}}></View>
                    <View style={{
                        flex: 2,
                        backgroundColor: '#dfdfe1',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={{backgroundColor: '#3b7f78', height: `${silo.percentage}%`}}></View>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#8bbfc0'}}>
                        <Text style={{position: 'absolute', top: 32, bottom: 0, left: 8, fontSize: 12}}>- 80%</Text>
                        <Text style={{position: 'absolute', top: 72, bottom: 0, left: 8, fontSize: 12}}>- 60%</Text>
                        <Text style={{position: 'absolute', top: 112, bottom: 0, left: 8, fontSize: 12}}>- 40%</Text>
                        <Text style={{position: 'absolute', top: 152, bottom: 0, left: 8, fontSize: 12}}>- 20%</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SiloOverview;
