import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, View} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right, Text, Title,} from 'native-base';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

import styles from '../Styles';

import getAllMeasurements from '../services/MeasurementService';
import {useStateValue} from "../context/StateContext";
import AnalyticsGraph from '../components/AnalyticsGraph';
import moment from "moment";


const AnalyticsScreen = (props) => {

  const [{measurements}, dispatch] = useStateValue();
  const siloId = props.navigation.getParam('id', 1);
  const [modalDisplayed,setModalDisplayed]=useState(false);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const getDataMeasurements = () => {
    let measurementsArray = Object.keys(measurements.data);
    let dataMeasurementsArray = [];
    for (let i = 0; i <= measurementsArray.length; i++) {
      if (i === 7) {
        break;
      }
      let dataMeasurement = {};
      dataMeasurement.x = moment(new Date(measurementsArray[i])).format("MMM DD");

      let yValues = Object.values(measurements.data[measurementsArray[i]]);
      dataMeasurement.y = yValues[0];
      dataMeasurementsArray.push(dataMeasurement);
    }
    return dataMeasurementsArray;
  };

  useEffect(() => {
    getAllMeasurements(dispatch, siloId);
  }, []);

  const onRefresh = () => {
    getAllMeasurements(dispatch, siloId);
  };

  const analyticsList = () => {
    const arr = [];
    Object.keys(measurements.data)
      .map(key => {
        arr.push(<ListItem key={key} itemDivider>
          <Text style={{color: '#676767'}}>{new Date(key).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric'
          })}</Text>
        </ListItem>);
        Object.keys(measurements.data[key])
          .map(timestamp => {
            arr.push(<ListItem key={key + timestamp}>
              <Left>
                <Text>{measurements.data[key][timestamp]}%</Text>
              </Left>
              <Right>
                <Text note>{timestamp}</Text>
              </Right>
            </ListItem>);
          });
      });
    return arr.map(x => x);
  };

  return (
    <Container style={styles.container}>
      {/*<DateTimePicker*/}
      {/*  isVisible={isDateTimePickerVisible}*/}
      {/*  onConfirm={(date) => (console.log(date))}*/}
      {/*  onCancel={() => (setIsDateTimePickerVisible(false))}*/}
      {/*/>*/}
      <Modal isVisible={modalDisplayed} onBackButtonPress={()=> setModalDisplayed(false)} backdropTransitionOutTiming={0}>
        <View style={{backgroundColor: 'white', height: '70%', alignItems: 'center'}}>
          {isDateTimePickerVisible ?
            <View>
              <DatePicker
                date={date}
                onDateChange={date => setDate(date)}
              />
            </View>
            :
            <View>
              <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                <Text>Select Date & Time</Text>
              </View>
              <View style={{flex: 3, justifyContent: 'center'}}>
                <Text>
                  Jebeni modal
                </Text>
                <Button onPress={() => setIsDateTimePickerVisible(true)}><Text>Klikni me</Text></Button>
              </View>
              <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                <Text>CANCEL</Text>
              </View>
            </View>
          }
        </View>
      </Modal>
      <Header style={{backgroundColor: 'white'}}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name='arrow-back' style={styles.icons}/>
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>Analytics</Title>
        </Body>
        <Right/>
      </Header>
      {(Object.entries(measurements.data).length === 0 && measurements.data.constructor) ? <ActivityIndicator
          animating={true}
          size="large"
        /> :
        (<View>
          <View style={{marginBottom: 0, height: 220}}>
            <AnalyticsGraph
              loading={false}
              data={getDataMeasurements()}
              height={220}
            />

          </View>
          <View style={{height:30}}>
            <Button
              block
              primary
              onPress={() => setModalDisplayed(true)}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                //paddingVertical:15,
                height:30,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                backgroundColor: '#6CC799',
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  //marginLeft: -15
                }}
              >
                Date
              </Text>
            </Button>
          </View>
        </View>)}
      <ScrollView style={{position: 'relative', width: '100%', marginTop: 0}} refreshControl={<RefreshControl
        refreshing={measurements.loading}
        onRefresh={onRefresh}
      />}>
        <List>
          {analyticsList()}
        </List>
      </ScrollView>

    </Container>
  )
};

export default AnalyticsScreen;

