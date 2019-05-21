import React from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';

import styles from '../Styles';

import SiloOverview from '../components/SiloOverview';
import SiloShortInfo from '../components/SiloShortInfo';

const SiloDetailsScreen = (props) => {

  const silo = props.navigation.getParam('item', {});

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('Silos')}>
            <Icon name='arrow-back' style={styles.icons}/>
          </Button>
        </Left>
        <Body>
          <Title>{silo.sensor.serial_number}</Title>
        </Body>
        <Right>
          <Button transparent
                  onPress={() => props.navigation.navigate('SiloConfig', { siloDetails: silo })}>
            <Icon name="ios-information-circle-outline" style={styles.icons}/>
          </Button>
        </Right>
      </Header>
      <Content>
        <SiloOverview silo={silo}/>
        <SiloShortInfo test={props}/>
      </Content>
    </Container>
  );
};

export default SiloDetailsScreen;
