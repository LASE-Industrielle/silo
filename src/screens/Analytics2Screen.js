/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { elevationShadowStyle } from '../Styles';
import DatePickerIcon from '../icons/DatePickerIcon';

const testJson = {
  data: [
    {
      key: 1,
      date: 'FRIDAY, MAY 24',
      content: [
        { time: '13:42', percentage: 35 },
        { time: '12:51', percentage: 10 },
        { time: '12:47', percentage: 50 },
      ],
    },
    {
      key: 2,
      date: 'SATURDAY, MARCH 23',
      content: [{ time: '13:42', percentage: 20 }, { time: '12:51', percentage: 24 }],
    },
    {
      key: 3,
      date: 'FRIDAY, MARCH 22',
      content: [
        { time: '13:42', percentage: 35 },
        { time: '12:51', percentage: 10 },
        { time: '12:47', percentage: 50 },
      ],
    },
  ],
};

const style = StyleSheet.create({
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  transparentView: {
    marginTop: 10,
    marginHorizontal: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#58AA8C',
    borderRadius: 5,
  },
  periodButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  list: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 10,
    borderRadius: 10,
    ...elevationShadowStyle(),
    paddingHorizontal: 10,
  },
  date: { margin: 10, marginTop: 25, flexDirection: 'row', justifyContent: 'flex-start' },
  percentageFont: { margin: 5, fontWeight: 'bold' },
  dot: { margin: 5, color: 'orange' },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

const Analytics2Screen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.date}>
          <Text style={{ color: '#BEB9B9' }}>{item.date}</Text>
        </View>
        {item.content.map(x => (
          <View style={{ flex: 1 }}>
            <View style={style.listItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={style.dot}>•</Text>
                <Text style={style.percentageFont}>{`${x.percentage}%`}</Text>
              </View>
              <View>
                <Text style={{ color: '#BEB9B9' }}>{x.time}</Text>
              </View>
            </View>
            <View style={style.line} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#3A7F78', marginTop: 70 }}>
      <View style={style.transparentView}>
        <View style={{ width: 300, height: 300 }} />
      </View>
      <View style={style.transparentView}>
        <Text style={style.periodButtonText}>SELECT PERIOD</Text>
        <View>
          <DatePickerIcon fill="#FFFFFF" />
        </View>
      </View>
      <View style={style.transparentView}>
        <Text style={style.periodButtonText}>SELECT DATE & TIME</Text>
        <View>
          <DatePickerIcon fill="#FFFFFF" />
        </View>
      </View>
      <FlatList data={testJson.data} renderItem={renderItem} style={style.list} />
    </ScrollView>
  );
};

export default Analytics2Screen;
