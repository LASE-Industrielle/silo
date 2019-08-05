import React, { useState } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from "native-base";
import Modal from "react-native-modal";
import DatePickerComponent from './DatePickerComponent';

const DatePickerModal = ({modalDisplayed, setModalDisplayed, filterData}) => {
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);

  const [isSelectDatePickerVisible, setIsSelectDatePickerVisible] = useState(true);
  const [isStartDateTimePickerVisible, setIsStartDateTimePickerVisible] = useState(false);
  const [isEndDateTimePickerVisible, setIsEndDateTimePickerVisible] = useState(false);



  return (
    <Modal isVisible={modalDisplayed} onBackButtonPress={()=> setModalDisplayed(false)} backdropTransitionOutTiming={0}>
      <View style={{backgroundColor: 'white', height: '70%', alignItems: 'center'}}>
        {!isStartDateTimePickerVisible && !isEndDateTimePickerVisible ?
          <View>
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <Text>Select Date & Time</Text>
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Text>
                Start Date & Time
              </Text>
              <TouchableOpacity onPress={() => {
                setIsSelectDatePickerVisible(false);
                setIsStartDateTimePickerVisible(true);
              }}>
                <Text>{startDateTime ? startDateTime.toLocaleString() : '---'}</Text>
              </TouchableOpacity>
              <Text>
                End Date & Time
              </Text>
              <TouchableOpacity onPress={() => {
                setIsSelectDatePickerVisible(false);
                setIsEndDateTimePickerVisible(true);
              }}>
                <Text>{endDateTime ? endDateTime.toLocaleString() : '---'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => {
                setModalDisplayed(false);
                setStartDateTime(null);
                setEndDateTime(null);
              }}>
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setModalDisplayed(false);

                filterData(startDateTime, endDateTime);

                setStartDateTime(null);
                setEndDateTime(null);
              }}>
                <Text>APPLY</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          null
        }
        {isStartDateTimePickerVisible ?
          <DatePickerComponent
            setDateTime={setStartDateTime}
            isVisible={setIsStartDateTimePickerVisible}
          />
          :
          null
        }
        {isEndDateTimePickerVisible ?
          <DatePickerComponent
            setDateTime={setEndDateTime}
            isVisible={setIsEndDateTimePickerVisible}
          />
          :
          null
        }
      </View>
    </Modal>
  );
};

export default DatePickerModal;