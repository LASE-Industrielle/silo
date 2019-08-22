import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../Styles';

import GradientHeaderComponent from '../components/GradientHeaderComponent';

const style = StyleSheet.create({
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
});

const SiloDescriptionScreen = (props) => {
  const silo = props.navigation.getParam('siloDetails', {});

  return (
    <GradientHeaderComponent>
      <View style={{ flex: 1 }}>
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
                  <Text style={style.statsText}>{silo.width} </Text>
                  <Text style={style.units}>m</Text>
                </View>
              </View>
              <View style={style.specificationRow}>
                <Text style={style.greyText}>Height</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={style.statsText}>{silo.height} </Text>
                  <Text style={style.units}>m</Text>
                </View>
              </View>
              <View style={style.specificationRow}>
                <Text style={style.greyText}>Capacity</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={style.statsText}>{silo.capacity} </Text>
                  <Text style={style.units}>kg</Text>
                </View>
              </View>
            </View>
            <View style={style.line} />
            <View style={{ margin: 20 }}>
              <Text style={style.greyText}>Location</Text>
              <Text style={style.blackText}>{silo.location}</Text>
            </View>
            <View style={style.line} />
            <View style={{ margin: 20 }}>
              <Text style={style.greyText}>Serial Number</Text>
              <Text style={style.blackText}>{silo.sensor.serial_number}</Text>
            </View>
            <View style={style.line} />
            <View style={{ margin: 20 }}>
              <Text style={style.greyText}>Type</Text>
              <Text style={style.blackText}>{silo.sensor.type}</Text>
            </View>
          </View>
        </View>
      </View>
    </GradientHeaderComponent>
  );
};

export default SiloDescriptionScreen;
