import React, { useContext, useEffect, useReducer } from 'react';

import { RefreshControl } from 'react-native';

import { statusReducer } from '../reducers/Reducers';
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

  useEffect(() => {
    downloadData(dispatch, token);
  }, []);

  const onRefresh = () => {
    downloadData(dispatch, token);
  };

  return (
    <Container>
      <Header transparent>
        <Left/>
        <Body>
          <Title>Silos</Title>
        </Body>
        <Right>
          { state.data.length > 0 ?  <Text note>Updated</Text>:  <Text note></Text>}
        </Right>
      </Header>
      <Content refreshControl={<RefreshControl
        refreshing={state.loading}
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
