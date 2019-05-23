import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primary } from '../Colors';

const size = 45;

const SiloPercentage = ({ percentage }) => (
  <View style={style.defaultView}>
    <Text style={style.defaultText}>{percentage}%</Text>
  </View>
);

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
    fontWeight: 'bold',
  },
});

export default SiloPercentage;
