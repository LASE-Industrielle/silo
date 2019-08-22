import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  graphWidget: {
    flex: 0.25,
    flexDirection: 'column',
    backgroundColor: '#6CC799',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 30,
  },
  mainPercentage: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  fullText: { color: 'white', alignSelf: 'flex-end' },
  arrow: { margin: 3, color: 'gray' },
  arrowNumber: { margin: 3, color: 'white', fontWeight: 'bold' },
  progressOuter: {
    borderWidth: 3,
    borderColor: '#98C8B8',
    borderRadius: 10,
    width: 320,
    height: 54,
    alignSelf: 'center',
    margin: 15,
  },
  progressInner: {
    backgroundColor: '#448D7E',
    borderRadius: 10,
    width: 100,
    height: 47,
    alignSelf: 'flex-start',
  },
});

const GraphWidget = () => (
  <View style={style.graphWidget}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.mainPercentage}>30%</Text>
        <Text style={style.fullText}> full</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.arrow}>↓</Text>
        <Text style={style.arrowNumber}>0</Text>
        <Text style={style.arrow}>↑</Text>
        <Text style={style.arrowNumber}>100</Text>
      </View>
    </View>
    <View style={style.progressOuter}>
      <View style={style.progressInner} />
    </View>
  </View>
);

export default GraphWidget;
