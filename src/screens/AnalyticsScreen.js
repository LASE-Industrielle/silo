import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, RefreshControl, ScrollView, View} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right, Text, Title,} from 'native-base';

import styles from '../Styles';

import {LineChart} from 'react-native-chart-kit';

import {primary, secondary} from '../Colors';
import getAllMeasurements from '../services/MeasurementService';
import {useStateValue} from "../context/StateContext";


const AnalyticsScreen = (props) => {

  const [{measurements}, dispatch] = useStateValue();
  const siloId = props.navigation.getParam('id', 1);

  useEffect(() => {
    getAllMeasurements(dispatch, siloId);
  }, []);

  const onRefresh = () => {
    getAllMeasurements(dispatch, siloId);
  };

  const getLabels = () => {
    const labels = [];

    Object.keys(measurements.data)
      .map(key => {
        labels.push(new Date(key).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        }));
      });

    return labels.reverse();
  };

  const getAveragePercentages = () => {
    const array = [];

    Object.keys(measurements.data)
      .map(key => {
        let average = 0;
        Object.keys(measurements.data[key])
          .map(percentage => {
            average += measurements.data[key][percentage];
          });
        average = average / Object.keys(measurements.data[key]).length;
        array.push(average);
      });
    return array.reverse();
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
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name='arrow-back' style={styles.icons}/>
        </Button>
      </Left>
      <Body>
      <Title>Analytics</Title>
      </Body>
      <Right/>
    </Header>
    {(Object.entries(measurements.data).length === 0 && measurements.data.constructor )? <ActivityIndicator
      animating={true}
      size="large"
  />:( <View  style={{marginBottom: 0, height: 220}}>
    <LineChart
        data={{
          labels: getLabels(),
          datasets: [{
            data: getAveragePercentages()
          }]
        }}
        width={Math.round(Dimensions.get('window').width)} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: primary,
          backgroundGradientFrom: primary,
          backgroundGradientTo: secondary,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: () => `rgba(255, 255, 255, 0.9)`,
          style: {
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }
        }}
        bezier
        style={{marginBottom: 0}}
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
