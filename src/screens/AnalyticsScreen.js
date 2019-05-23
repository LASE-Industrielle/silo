import React, { useEffect, useReducer } from 'react';
import { ScrollView, View } from 'react-native';
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

import styles from '../Styles';

import { LineChart } from 'react-native-chart-kit';

import { primary, secondary } from '../Colors';
import { measurementsReducer } from '../reducers/Reducers';
import getAllMeasurements from '../services/MeasurementService';

const initialState = {
  data: {},
  errorMessage: '',
  loading: false,
};

const AnalyticsScreen = (props) => {

  const [state, dispatch] = useReducer(measurementsReducer, initialState);
  const siloId = props.navigation.getParam('id', 1);

  useEffect(() => {
    getAllMeasurements(dispatch, siloId);
  }, []);

  const getLabels = () => {
    const labels = [];

    Object.keys(state.data)
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

    Object.keys(state.data)
      .map(key => {
        let average = 0;
        Object.keys(state.data[key])
          .map(percentage => {
            average += state.data[key][percentage];
          });
        average = average / Object.keys(state.data[key]).length;
        array.push(average);
      });
    return array.reverse();
  };

  const analyticsList = () => {
    const arr = [];
    Object.keys(state.data)
      .map(key => {
        arr.push(<ListItem key={key} itemDivider>
          <Text style={{ color: '#676767' }}>{new Date(key).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric'
          })}</Text>
        </ListItem>);
        Object.keys(state.data[key])
          .map(timestamp => {
            arr.push(<ListItem key={key + timestamp}>
              <Left>
                <Text>{state.data[key][timestamp]}%</Text>
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
      <View style={{
        marginBottom: 0,
        height: 220
      }}>
        <LineChart
          data={{
            labels: getLabels(),
            datasets: [{
              data: getAveragePercentages()
            }]
          }}
          width={380} // from react-native
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
          style={{ marginBottom: 0 }}
        />

      </View>
      <ScrollView style={{
        position: 'relative',
        width: '100%',
        marginTop: 0
      }}>
        <List>
          {analyticsList()}
        </List>
      </ScrollView>
    </Container>
  );
};

export default AnalyticsScreen;
