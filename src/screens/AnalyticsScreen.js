import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
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

const AnalyticsScreen = (props) => (
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
        style={{}}
      />
      <List>
        <ListItem itemDivider>
          <Text style={{ color: '#676767' }}>15th May 2019</Text>
        </ListItem>
        <ListItem>
          <Left>
            <Text>83%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>83%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>83%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{ color: '#676767' }}>14th May 2019</Text>
        </ListItem>
        <ListItem>
          <Left>
            <Text>83%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>77%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>65%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem itemDivider>
          <Text style={{ color: '#676767' }}>13th May 2016</Text>
        </ListItem>
        <ListItem>
          <Left>
            <Text>11%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>21%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>33%</Text>
          </Left>
          <Right>
            <Text note>17:31</Text>
          </Right>
        </ListItem>
      </List>

    </Content>
  </Container>
);

export default AnalyticsScreen;
