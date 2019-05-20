import React from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

import styles from '../Styles';

import { LineChart } from 'react-native-chart-kit';

import { primary, secondary } from '../Colors';

const AnalyticsScreen = (props) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name='arrow-back' style={styles.icons} />
        </Button>
      </Left>
      <Body>
        <Title>Analytics</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <LineChart
        data={{
          labels: ['March', 'April', 'May', 'June'],
          datasets: [{
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }]
        }}
        width={330} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: primary,
          backgroundGradientFrom: primary,
          backgroundGradientTo: secondary,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 12
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingTop: 10,
          paddingHorizontal: 30,
        }}
      />
      <List>
        <ListItem itemDivider>
          <Text>16.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>83% at 17:31</Text>
        </ListItem>
        <ListItem>
          <Text>51% at 15:31</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>15.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>21% at 21:14</Text>
        </ListItem>
        <ListItem>
          <Text>31% at 14:21</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>14.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>15% at 12:16</Text>
        </ListItem>
        <ListItem>
          <Text>89% at 10:29</Text>
        </ListItem>
      </List>

    </Content>
  </Container>
);

export default AnalyticsScreen;
