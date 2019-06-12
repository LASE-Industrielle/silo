import React, {useEffect} from 'react';
import {RefreshControl} from 'react-native';
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
  Right,
  Spinner,
  Text,
  Title
} from 'native-base';

import styles from '../Styles';

import SiloGraph from '../components/SiloGraph';
import SiloShortInfo from '../components/SiloShortInfo';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import getSilos from '../services/SiloService';
import {useStateValue} from "../context/StateContext";


const SiloDetailsScreen = (props) => {
  const [{silos}, dispatch] = useStateValue();
  const silo = props.navigation.getParam('item', {});

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  if(silos.data.length === 0) {
    return (
    <Container>
      <Content contentContainerStyle={styles.default}>
        <Spinner/>
      </Content>
    </Container>);
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Silos')}>
            <Icon name='arrow-back' style={styles.icons}/>
          </Button>
        </Left>
        <Body>
          <Title>{silos.data[silo.id - 1].name}</Title>
        </Body>
        <Right>
          <Button transparent
                  onPress={() => props.navigation.navigate('SiloDescription', { siloDetails: silos.data[silo.id - 1] })}>
            <Icon name="ios-information-circle-outline" style={styles.icons}/>
          </Button>
        </Right>
      </Header>
      <Content refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={silos.loading}/> }>
        <SiloGraph silo={silos.data[silo.id - 1]}/>
        <SiloShortInfo silo={silos.data[silo.id - 1]}/>
      </Content>
      <Footer style={{
        backgroundColor: 'white',
        borderTopWidth: 0,
        marginBottom:12
      }}>
        <FooterTab>
          <Button
            block
            primary
            onPress={() => props.navigation.navigate('Analytics', { id: silos.data[silo.id - 1].id })}
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
