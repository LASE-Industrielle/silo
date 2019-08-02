import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, View} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right, Text, Title,} from 'native-base';

import styles from '../Styles';

import getAllMeasurements from '../services/MeasurementService';
import {useStateValue} from "../context/StateContext";
import AnalyticsGraph from '../components/AnalyticsGraph';


const AnalyticsScreen = (props) => {

  const [{measurements}, dispatch] = useStateValue();
  const siloId = props.navigation.getParam('id', 1);

  const getDataMeasurements = () => {
    let measurementsArray = Object.keys(measurements.data);
    let dataMeasurementsArray = [];
    for(let i = 0; i <= measurementsArray.length; i++) {
      if(i === 7){
        break;
      }
      let dataMeasurement = {};
      dataMeasurement.x = new Date(measurementsArray[i]).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

      let yValues = Object.values(measurements.data[measurementsArray[i]]);
      dataMeasurement.y = yValues[0];
      dataMeasurementsArray.push(dataMeasurement);
    }
    console.log(dataMeasurementsArray.reverse());
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
          <Text style={{ color: '#676767' }}>{new Date(key).toLocaleDateString('en-US', {
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
    <Header style={{backgroundColor: 'white'}}>
      <Left>
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name='arrow-back' style={styles.icons}/>
        </Button>
      </Left>
      <Body>
      <Title style={{color:'black'}}>Analytics</Title>
      </Body>
      <Right/>
    </Header>
    {(Object.entries(measurements.data).length === 0 && measurements.data.constructor )? <ActivityIndicator
      animating={true}
      size="large"
  />:
      ( <View style={{marginBottom: 0, height: 220}}>
        <AnalyticsGraph
          loading={false}
          data={getDataMeasurements()}
          height={220}
        />
      </View>)}
    <ScrollView style={{position: 'relative', width: '100%', marginTop:0}} refreshControl={<RefreshControl
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
