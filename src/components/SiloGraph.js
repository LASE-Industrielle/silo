import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'native-base';

import globalstyle from '../Styles';

const style = StyleSheet.create({
  surroundingFlexView: {
    flex: 1,
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  percentageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  percentageText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  siloSideView: {
    flex: 1,
    backgroundColor: '#8bbfc0',
  },
  siloView: {
    flex: 2,
    backgroundColor: '#dfdfe1',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  percentage80Text: {
    position: 'absolute',
    top: 32,
    bottom: 0,
    left: 8,
    fontSize: 12,
  },
  percentage60Text: {
    position: 'absolute',
    top: 72,
    bottom: 0,
    left: 8,
    fontSize: 12,
  },
  percentage40Text: {
    position: 'absolute',
    top: 112,
    bottom: 0,
    left: 8,
    fontSize: 12,
  },
  percentage20Text: {
    position: 'absolute',
    top: 152,
    bottom: 0,
    left: 8,
    fontSize: 12,
  },
});

const SiloGraph = ({ silo }) => (
  <View style={globalstyle.default}>
    <View>
      <View style={style.surroundingFlexView}>
        <View style={style.percentageView}>
          <Text style={style.percentageText}>
            {silo.percentage}
% full
          </Text>
        </View>
        <View style={style.siloSideView} />
        <View style={style.siloView}>
          <View
            style={{
              backgroundColor: '#3b7f78',
              height: `${silo.percentage}%`,
            }}
          />
        </View>
        <View style={style.siloSideView}>
          <Text style={style.percentage80Text}>- 80%</Text>
          <Text style={style.percentage60Text}>- 60%</Text>
          <Text style={style.percentage40Text}>- 40%</Text>
          <Text style={style.percentage20Text}>- 20%</Text>
        </View>
      </View>
    </View>
  </View>
);

export default SiloGraph;
