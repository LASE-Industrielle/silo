import React from 'react';
import { View, Text } from 'react-native';

import { StyleSheet } from 'react-native';

const size = 45;

const style = StyleSheet.create({
  defaultView: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    color: 'white',
    fontWeight: 'bold'
  },

});


const SiloPercentage = ({ percentage }) => (
  <View style={style.defaultView}>
    <Text style={style.defaultText}>{percentage}%</Text>
  </View>
);

export default SiloPercentage;
