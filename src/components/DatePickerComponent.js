import React, { useEffect, useState } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from "native-base";
import DatePicker from 'react-native-date-picker';

const DatePickerComponent = ({setDateTime, isVisible}) => {

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(true);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return(
    <View>
      {
        isDatePickerVisible ?
          <View>
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <Text>Start Date</Text>
            </View>
            <DatePicker
              date={selectedDate}
              onDateChange={date => setSelectedDate(date)}
              locale={'en_GB'}
              textColor={'#6CC799'}
              mode={'date'}
            />
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => isVisible(false)}>
                <Text>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsDatePickerVisible(false);
                setIsTimePickerVisible(true);
              }}>
                <Text>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          null
      }
      {
        isTimePickerVisible ?
          <View>
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <Text>Start Time</Text>
            </View>
            <DatePicker
              date={selectedTime}
              onDateChange={date => setSelectedTime(date)}
              locale={'en_GB'}
              textColor={'#6CC799'}
              mode={'time'}
            />
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => {
                setIsTimePickerVisible(false);
                setIsDatePickerVisible(true);
              }}>
                <Text>BACK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setDateTime(new Date(selectedDate.getFullYear(),selectedDate.getMonth(), selectedDate.getDate(),
                  selectedTime.getHours(), selectedTime.getMinutes()));
                  isVisible(false);
              }}>
                <Text>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          null
      }
    </View>
  );
}

export default DatePickerComponent;