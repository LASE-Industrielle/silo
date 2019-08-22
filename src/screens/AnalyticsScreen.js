import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, RefreshControl, ScrollView, View,
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
} from 'native-base';
import moment from 'moment';
import styles from '../Styles';

import { getAllMeasurements, filterMeasurements } from '../services/MeasurementService';
import { useStore } from '../context/StateContext';
import AnalyticsGraph from '../components/AnalyticsGraph';
import DatePickerModal from '../components/DatePickerModal';
import DatePickerIcon from '../icons/DatePickerIcon';

const AnalyticsScreen = (props) => {
  const [{ measurements }, dispatch] = useStore();
  const siloId = props.navigation.getParam('id', 1);
  const [modalDisplayed, setModalDisplayed] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const filterData = (startDateTime, endDateTime) => {
    setSelectedStartDate(startDateTime);
    setSelectedEndDate(endDateTime);
    // filterMeasurements(dispatch, siloId, startDateTime.toLocaleString(), endDateTime.toLocaleDateString());
  };

  const getDataMeasurements = () => {
    const measurementsArray = Object.keys(measurements.data);
    const dataMeasurementsArray = [];
    for (let i = 0; i <= measurementsArray.length; i++) {
      if (i === 7) {
        break;
      }
      const dataMeasurement = {};
      dataMeasurement.x = moment(new Date(measurementsArray[i])).format('MMM DD');

      const yValues = Object.values(measurements.data[measurementsArray[i]]);
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
    Object.keys(measurements.data).map((key) => {
      arr.push(
        <ListItem key={key} itemDivider>
          <Text style={{ color: '#676767' }}>
            {new Date(key).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </ListItem>,
      );
      Object.keys(measurements.data[key]).map((timestamp) => {
        arr.push(
          <ListItem key={key + timestamp}>
            <Left>
              <Text>
                {measurements.data[key][timestamp]}
%
              </Text>
            </Left>
            <Right>
              <Text note>{timestamp}</Text>
            </Right>
          </ListItem>,
        );
      });
    });
    return arr.map(x => x);
  };

  return (
    <Container style={styles.container}>
      <DatePickerModal
        modalDisplayed={modalDisplayed}
        setModalDisplayed={setModalDisplayed}
        setSelectedStartDate={setSelectedStartDate}
        setSelectedEndDate={setSelectedEndDate}
        filterData={filterData}
      />
      <Header style={{ backgroundColor: 'white' }}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" style={styles.icons} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: 'black' }}>Analytics</Title>
        </Body>
        <Right />
      </Header>
      {Object.entries(measurements.data).length === 0 && measurements.data.constructor ? (
        <ActivityIndicator animating size="large" />
      ) : (
        <View>
          <View style={{ marginBottom: 0, height: 220 }}>
            <AnalyticsGraph loading={false} data={getDataMeasurements()} height={220} />
          </View>
          <View style={{ height: 40 }}>
            <Button
              block
              primary
              onPress={() => setModalDisplayed(true)}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                // paddingVertical:15,
                height: 40,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                backgroundColor: '#6CC799',
              }}
            >
              <DatePickerIcon fill="white" />
            </Button>
          </View>
        </View>
      )}
      <ScrollView
        style={{ position: 'relative', width: '100%', marginTop: 0 }}
        refreshControl={<RefreshControl refreshing={measurements.loading} onRefresh={onRefresh} />}
      >
        <List>{analyticsList()}</List>
      </ScrollView>
    </Container>
  );
};

export default AnalyticsScreen;
