import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';
import DatePicker from 'react-native-date-picker';

const primary = '#6CC799';

const DatePickerComponent = ({ setDateTime, isVisible, label }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(true);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <View style={{ flex: 1 }}>
      {isDatePickerVisible ? (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                borderBottomColor: primary,
                borderBottomWidth: 1,
                height: 50,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 10,
              }}
            >
              <Text style={{ color: primary, fontSize: 18 }}>
                {label}
                {' '}
Date
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <DatePicker
                date={selectedDate}
                onDateChange={date => setSelectedDate(date)}
                locale="en_GB"
                textColor="#6CC799"
                mode="date"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderTopColor: '#D6D6D6',
                borderTopWidth: 1,
                height: 50,
              }}
            >
              <TouchableOpacity onPress={() => isVisible(false)}>
                <Text style={{ fontSize: 12, color: '#F18382' }}>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsDatePickerVisible(false);
                  setIsTimePickerVisible(true);
                }}
              >
                <Text style={{ fontSize: 12, color: primary }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
      {isTimePickerVisible ? (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                borderBottomColor: primary,
                borderBottomWidth: 1,
                height: 50,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 10,
              }}
            >
              <Text style={{ color: primary, fontSize: 18 }}>
                {label}
                {' '}
Time
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 150,
              }}
            >
              <DatePicker
                date={selectedTime}
                onDateChange={date => setSelectedTime(date)}
                locale="en_GB"
                textColor="#6CC799"
                mode="time"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderTopColor: '#D6D6D6',
                borderTopWidth: 1,
                height: 50,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsTimePickerVisible(false);
                  setIsDatePickerVisible(true);
                }}
              >
                <Text style={{ fontSize: 12, color: '#F18382' }}>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDateTime(
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      selectedDate.getDate(),
                      selectedTime.getHours(),
                      selectedTime.getMinutes(),
                    ),
                  );
                  isVisible(false);
                }}
              >
                <Text style={{ fontSize: 12, color: primary }}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default DatePickerComponent;
