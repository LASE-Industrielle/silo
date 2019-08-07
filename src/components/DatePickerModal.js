import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from "native-base";
import Modal from "react-native-modal";
import DatePickerComponent from './DatePickerComponent'
import moment from "moment";
import DatePickerIcon from "../icons/DatePickerIcon";

const primary = "#6CC799"

const DatePickerModal = ({modalDisplayed, setModalDisplayed, filterData}) => {
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);

  const [isSelectDatePickerVisible, setIsSelectDatePickerVisible] = useState(true);
  const [isStartDateTimePickerVisible, setIsStartDateTimePickerVisible] = useState(false);
  const [isEndDateTimePickerVisible, setIsEndDateTimePickerVisible] = useState(false);


  return (
    <Modal isVisible={modalDisplayed} onBackButtonPress={() => setModalDisplayed(false)}
           backdropTransitionOutTiming={0}>
      <View style={{backgroundColor: 'white', height: '70%',}}>
        {!isStartDateTimePickerVisible && !isEndDateTimePickerVisible ?
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{
                flex: 1, borderBottomColor: primary,
                borderBottomWidth: 1, height: 50, alignItems: 'flex-start',
                justifyContent: 'center', paddingLeft: 10
              }}>
                <Text style={{color:primary,fontSize: 18}}>Select Date & Time</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:13,width:'80%', color:'#AAA9A9', paddingBottom:5}}>
                  Start Date & Time
                </Text>
                  <TouchableOpacity style={{width:'80%', height:'10%', borderRadius: 5, borderColor:primary, borderWidth:1, alignContent:'center', alignItems:'center'}} onPress={() => {
                    setIsStartDateTimePickerVisible(true);
                  }}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                      {startDateTime?<Text style={{lineHeight:13, fontSize:13, justifyContent:'center', color:primary}}>{moment(startDateTime).format('DD MMMM - HH:mm')}</Text>: <DatePickerIcon fill={primary} />}
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:13, width:'80%', color:'#AAA9A9', paddingTop:20, paddingBottom:5}}>
                  End Date & Time
                </Text>
                  <TouchableOpacity style={{width:'80%', height:'10%', borderRadius: 5, borderColor:primary, borderWidth:1, alignContent:'center', alignItems:'center'}} onPress={() => {
                    setIsEndDateTimePickerVisible(true);
                  }}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                      {endDateTime?<Text style={{lineHeight:13, fontSize:13, justifyContent:'center', color:primary}}>{moment(endDateTime).format('DD MMMM - HH:mm')}</Text>: <DatePickerIcon fill={primary} />}
                    </View>

                  </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderTopColor: '#D6D6D6',
                borderTopWidth: 1,
                height: 50
              }}>
                <TouchableOpacity onPress={() => {
                  setModalDisplayed(false);
                  setStartDateTime(null);
                  setEndDateTime(null);
                }}>
                  <Text style={{fontSize:12, color:'#F18382'}}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setModalDisplayed(false);

                  filterData(startDateTime, endDateTime);

                  setStartDateTime(null);
                  setEndDateTime(null);
                }}>
                  <Text style={{fontSize:12,color:primary}}>APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          :
          null
        }
        {isStartDateTimePickerVisible ?
          <DatePickerComponent
            setDateTime={setStartDateTime}
            isVisible={setIsStartDateTimePickerVisible}
            label={'Start'}
          />
          :
          null
        }
        {isEndDateTimePickerVisible ?
          <DatePickerComponent
            setDateTime={setEndDateTime}
            isVisible={setIsEndDateTimePickerVisible}
            label={'End'}
          />
          :
          null
        }
      </View>
    </Modal>
  );
};

export default DatePickerModal;
