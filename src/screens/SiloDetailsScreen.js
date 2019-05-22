import React from 'react';
import {View} from 'react-native'
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title, Footer, FooterTab} from 'native-base';

import styles from '../Styles';

import SiloOverview from '../components/SiloOverview';
import SiloShortInfo from '../components/SiloShortInfo';
import AnalyticsIcon from "../icons/AnalyticsIcon";

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
        <SiloShortInfo silo={silo}/>
      </Content>
      <Footer style={{backgroundColor:"white", borderTopWidth: 0}}>
        <FooterTab >
          <Button
              block
              primary
              onPress={() => props.navigation.navigate('Analytics', {id: silo.id})}
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
