import React, { useReducer, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right, Spinner,
  Text,
  Title
} from 'native-base';

import styles from '../Styles';

import SiloGraph from '../components/SiloGraph';
import SiloShortInfo from '../components/SiloShortInfo';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import { silosReducer } from '../reducers/SilosReducer';
import getSilos from '../services/SiloService';

const initialState = {
  data: [],
  errorMessage: '',
  loading: false,
};

const SiloDetailsScreen = (props) => {
  const [state, dispatch] = useReducer(silosReducer, initialState);
  const silo = props.navigation.getParam('item', {});

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  if(state.data.length === 0) {
    return (
    <Container>
      <Content contentContainerStyle={styles.default}>
        <Spinner/>
      </Content>
    </Container>);
  }

  return (
    <Container style={styles.container}>
      <Header style={{backgroundColor:'white'}}>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Silos')}>
            <Icon name='arrow-back' style={styles.icons}/>
          </Button>
        </Left>
        <Body>
          <Title style={{color:'black'}}>{state.data[silo.id - 1].name}</Title>
        </Body>
        <Right>
          <Button transparent
                  onPress={() => props.navigation.navigate('SiloDescription', { siloDetails: state.data[silo.id - 1] })}>
            <Icon name="ios-information-circle-outline" style={styles.icons}/>
          </Button>
        </Right>
      </Header>
      <Content refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={state.loading}/> }>
        <SiloGraph silo={state.data[silo.id - 1]}/>
        <SiloShortInfo silo={state.data[silo.id - 1]}/>
      </Content>
      <Footer style={{
        borderTopWidth: 0,
        marginBottom:12,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        elevation: 0
      }}>
        <FooterTab style={{ backgroundColor: 'white'}}>
          <Button
            block
            primary
            onPress={() => props.navigation.navigate('Analytics', { id: state.data[silo.id - 1].id })}
            style={styles.buttonAnalyticsStyle}
          >
            <AnalyticsIcon/>
            <Text style={{
              color: 'white',
              fontSize: 14,
              marginLeft: -15,
            }}>Analytics</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default SiloDetailsScreen;
