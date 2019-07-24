import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primary } from '../Colors';

const a = '#14A95C';
const b = '#3498DB';
const c = '#F39C12';
const d = '#BEB9B9';

const size = 50;

const SiloPercentage = ({ percentage }) => {
  const hexToRGB = (hexColor) => {
    if (hexColor !== undefined) {
      return {
        red: parseInt(hexColor.substring(1, 3), 16),
        green: parseInt(hexColor.substring(3, 5), 16),
        blue: parseInt(hexColor.substring(5, 7), 16),
      };
    }
  };

  let color;
  console.log(percentage);
  if (percentage === 100) {
    color = a;
  } else if (percentage >= 70) {
    color = b;
  } else if (percentage >= 30) {
    color = c;
  } else {
    color = d;
  }
  const { red, green, blue } = hexToRGB(color);

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: `rgba(${red}, ${green}, ${blue}, 0.4)`,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: `rgba(${red}, ${green}, ${blue}, 1)`,
          fontWeight: 'bold',
        }}
      >
        {percentage}
%
      </Text>
    </View>
  );
};

export default SiloPercentage;
