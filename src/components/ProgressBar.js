import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({ percentage }) => (
  <View
    style={{
      borderWidth: 3,
      borderColor: '#98C8B8',
      borderRadius: 10,
      width: 320,
      height: 54,
      alignSelf: 'center',
      margin: 15,
    }}
  >
    <View
      style={{
        backgroundColor: '#448D7E',
        borderRadius: 10,
        width: 313 * percentage * 0.01,
        height: 47,
        alignSelf: 'flex-start',
      }}
    />
  </View>
);

export default ProgressBar;
