import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'native-base';

import globalStyles from '../Styles';

const SiloGraph = ({ silo }) => {
  return (
    <View style={globalStyles.default}>
      <View>
        <View style={styles.surroundingFlexView}>
          <View style={styles.percentageView}>
            <Text style={styles.percentageText}>{silo.percentage}% full</Text>
          </View>
          <View style={styles.siloSideView}/>
          <View style={styles.siloView}>
            <View style={{
              backgroundColor: '#3b7f78',
              height: `${silo.percentage}%`
            }}/>
          </View>
          <View style={styles.siloSideView}>
            <Text style={styles.percentage80Text}>- 80%</Text>
            <Text style={styles.percentage60Text}>- 60%</Text>
            <Text style={styles.percentage40Text}>- 40%</Text>
            <Text style={styles.percentage20Text}>- 20%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surroundingFlexView: {
    flex: 1,
    width: '100%',
    height: 200,
    flexDirection: 'row'
  },
  percentageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  percentageText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black'
  },
  siloSideView: {
    flex: 1,
    backgroundColor: '#8bbfc0'
  },
  siloView: {
    flex: 2,
    backgroundColor: '#dfdfe1',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  percentage80Text: {
    position: 'absolute',
    top: 32,
    bottom: 0,
    left: 8,
    fontSize: 12
  },
  percentage60Text: {
    position: 'absolute',
    top: 72,
    bottom: 0,
    left: 8,
    fontSize: 12
  },
  percentage40Text: {
    position: 'absolute',
    top: 112,
    bottom: 0,
    left: 8,
    fontSize: 12
  },
  percentage20Text: {
    position: 'absolute',
    top: 152,
    bottom: 0,
    left: 8,
    fontSize: 12
  }
});

export default SiloGraph;
