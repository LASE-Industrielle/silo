import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primary } from '../Colors';

const size = 45;

const style = StyleSheet.create({
  defaultView: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: primary,
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
