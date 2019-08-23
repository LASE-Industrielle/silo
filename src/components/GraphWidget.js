import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import LinearGradient from 'react-native-linear-gradient';

const style = StyleSheet.create({
  graphWidget: {
    flex: 0.25,
    flexDirection: 'column',
    //backgroundColor: '#6CC799',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 30,
  },
  mainPercentage: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  fullText: { color: 'white', alignSelf: 'flex-end' },
  arrow: { margin: 3, color: 'gray' },
  arrowNumber: { margin: 3, color: 'white', fontWeight: 'bold' },
});

const GraphWidget = ({ silo }) => (
  <LinearGradient colors={['#6CC699', '#4B9783']} style={style.graphWidget}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.mainPercentage}>{`${silo.percentage }%`}</Text>
        <Text style={style.fullText}> full</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.arrow}>↓</Text>
        <Text style={style.arrowNumber}>0</Text>
        <Text style={style.arrow}>↑</Text>
        <Text style={style.arrowNumber}>100</Text>
      </View>
    </View>
    <ProgressBar percentage={silo.percentage} />
  </LinearGradient>
);

export default GraphWidget;
