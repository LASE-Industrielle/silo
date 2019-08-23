import React from 'react';
import {
  View, Text, TouchableWithoutFeedback, StyleSheet,
} from 'react-native';

import { useNavigation } from 'react-navigation-hooks';
import { elevationShadowStyle } from '../Styles';

const style = StyleSheet.create({
  tableContainer: { flex: 0.65, backgroundColor: '#F2F2F2' },
  shadowContainer: {
    flex: 1,
    margin: 10,
    ...elevationShadowStyle(),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  tableContainerList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 20,
  },
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    margin: 5,
  },
  tableItemContainer: { flexDirection: 'row', justifyContent: 'space-between', margin: 7 },
  analyticsButton: {
    backgroundColor: '#02A04E',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  analyticsText: { color: 'white', margin: 15 },
  date: { color: '#BEB9B9' },
  greenDot: { color: '#6CC799' },
  orangeDot: { color: '#F1B950' },
  percentage: { marginLeft: 10 },

  kgStatus: { color: '#83D0A9', fontWeight: 'bold', marginVertical: 10 },
});

const SiloDetailsTable = ({ silo }) => {
  const navigation = useNavigation();
  return (
    <View style={style.tableContainer}>
      <View style={style.shadowContainer}>
        <View style={style.tableContainerList}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 50 }}>
              <Text style={style.greyText}>Content</Text>
              <Text style={{ color: 'black', marginVertical: 10 }}>Soil</Text>
            </View>
            <View style={style.line} />
            <View style={{ marginLeft: 5 }}>
              <Text style={style.greyText}>Capacity</Text>
              <Text style={style.kgStatus}>
                {`${Math.round(silo.percentage * 0.01 * silo.capacity)} / ${silo.capacity}`}
              </Text>
            </View>
          </View>
          <View style={style.line} />
          <Text style={{ color: '#BEB9B9', margin: 10 }}>Average</Text>
          {Object.keys(silo.values_by_day).map(key => (
            <View style={style.tableItemContainer} key={key}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={silo.values_by_day[key] < 50 ? style.orangeDot : style.greenDot}>
                  •
                </Text>
                <Text style={style.percentage}>{`${silo.values_by_day[key]}%`}</Text>
              </View>
              <Text style={style.date}>{key}</Text>
            </View>
          ))}
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Analytics', { id: silo.id });
            }}
          >
            <View style={style.analyticsButton}>
              <Text style={style.analyticsText}>ANALYTICS</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default SiloDetailsTable;
