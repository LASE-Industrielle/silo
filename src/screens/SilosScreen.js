import React, { useContext, useEffect, useReducer, useState } from 'react';

import { RefreshControl } from 'react-native';

import { statusReducer } from '../Reducers';
import downloadData from '../services/SiloService';
import UserContext from '../context/UserContext';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title
} from 'native-base';

import SiloPercentage from '../components/SiloPercentage';

const initialState = {
  data: [],
  errorMessage: '',
  loading: false,
};


const SilosScreen = (props) => {
  const [state, dispatch] = useReducer(statusReducer, initialState);
  const { token } = useContext(UserContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    downloadData(dispatch, token);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setInterval(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <Container>
      <Header transparent>
        <Left/>
        <Body>
          <Title>All silos</Title>
        </Body>
        <Right><Text note>Updated</Text></Right>

      </Header>
      <Content refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}>
        <List>
          {state.data.map(item =>
            <ListItem key={item.id} onPress={() => {
              props.navigation.navigate('SiloOverview', { item: item });
            }}>
              <Left>
                <SiloPercentage percentage={item.percentage}/>
                <Body>
                <Text>{item.sensor.serial_number}</Text>
                <Text note>{item.location}</Text>
                </Body>
              </Left>
              <Right>
                <Text note>7h ago</Text>
              </Right>
            </ListItem>
          )}
        </List>
      </Content>
    </Container>
  );

};

export default SilosScreen;
