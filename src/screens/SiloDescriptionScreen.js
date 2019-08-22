import React from 'react';
import { View, Text } from 'react-native';
import {
  Body, Button, Container, Content, Header, Icon, Left, Right, Title,
} from 'native-base';

import SiloData from '../components/SiloData';
import SensorData from '../components/SensorData';
import { elevationShadowStyle } from '../Styles';

const SiloDescriptionScreen = (props) => {
  const silo = props.navigation.getParam('siloDetails', {});

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Header</Text>
      </View>
      <View style={{ flex: 0.9 }}>
        <View
          style={{
            margin: 10,
            flex: 1,
            flexDirection: 'column',
            borderRadius: 20,
            backgroundColor: 'white',
            ...elevationShadowStyle(2.3, 0.3),
          }}
        >
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <View style={style.specificationRow}>
              <Text style={style.greyText}>Width</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.statsText}>10 </Text>
                <Text style={style.units}>m</Text>
              </View>
            </View>
            <View style={style.specificationRow}>
              <Text style={style.greyText}>Height</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.statsText}>60 </Text>
                <Text style={style.units}>m</Text>
              </View>
            </View>
            <View style={style.specificationRow}>
              <Text style={style.greyText}>Capacity</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.statsText}>450 </Text>
                <Text style={style.units}>kg</Text>
              </View>
            </View>
          </View>
          <View style={style.line} />
          <View style={{ margin: 20 }}>
            <Text style={style.greyText}>Location</Text>
            <Text style={style.blackText}>Walter-Horn-Weg 1, Solingen</Text>
          </View>
          <View style={style.line} />
          <View style={{ margin: 20 }}>
            <Text style={style.greyText}>Serial Number</Text>
            <Text style={style.blackText}>Sensor#111</Text>
          </View>
          <View style={style.line} />
          <View style={{ margin: 20 }}>
            <Text style={style.greyText}>Type</Text>
            <Text style={style.blackText}>Laser</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = {
  specificationRow: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  greyText: { color: '#BEB9B9', margin: 2 },
  blackText: { color: '#656565', margin: 2 },
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    marginHorizontal: 20,
  },
  statsText: {
    fontSize: 20,
    color: '#83D0A9',
    fontWeight: 'bold',
  },
  units: { alignSelf: 'flex-end', color: '#BEB9B9' },
};

export default SiloDescriptionScreen;
