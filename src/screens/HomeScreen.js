import React, { useContext, useEffect, useReducer, useState } from 'react';

import { RefreshControl } from 'react-native';

import { statusReducer } from '../Reducers';
import downloadData from '../services/SiloService';
import UserContext from '../context/UserContext';
import { Body, Container, Content, Header, Left, List, ListItem, Right, Text } from 'native-base';

import SiloPercentage from '../components/SiloPercentage';

const initialState = {
  data: [],
  errorMessage: '',
  loading: false,
};


const HomeScreen = (props) => {
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
        <Text>All silos</Text>
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

export default HomeScreen;
