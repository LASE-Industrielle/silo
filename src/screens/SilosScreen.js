import React, { useEffect, useReducer } from 'react';

import { RefreshControl } from 'react-native';

import styles from '../Styles';
import { silosReducer } from '../reducers/SilosReducer';
import getSilos from '../services/SiloService';

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
  const [state, dispatch] = useReducer(silosReducer, initialState);

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  return (
    <Container style={styles.container}>
      <Header transparent>
        <Left/>
        <Body>
          <Title style={{color:'black'}}>Silos</Title>
        </Body>
        <Right>
          {state.data.length > 0 ? <Text note>Updated</Text> : <Text note/>}
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
                  <Text>{item.name}</Text>
                  <Text note>{item.location}</Text>
                </Body>
              </Left>
              <Right>
                <Text note>{item.last_update}</Text>
              </Right>
            </ListItem>
          )}
        </List>
      </Content>
    </Container>
  );

};

export default SilosScreen;
