import React from 'react';
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
  Text,
  Title
} from 'native-base';

import styles from '../Styles';

import SiloGraph from '../components/SiloGraph';
import SiloShortInfo from '../components/SiloShortInfo';
import AnalyticsIcon from '../icons/AnalyticsIcon';

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
          <Title>{silo.name}</Title>
        </Body>
        <Right>
          <Button transparent
                  onPress={() => props.navigation.navigate('SiloDescription', { siloDetails: silo })}>
            <Icon name="ios-information-circle-outline" style={styles.icons}/>
          </Button>
        </Right>
      </Header>
      <Content>
        <SiloGraph silo={silo}/>
        <SiloShortInfo silo={silo}/>
      </Content>
      <Footer style={{
        backgroundColor: 'white',
        borderTopWidth: 0
      }}>
        <FooterTab>
          <Button
            block
            primary
            onPress={() => props.navigation.navigate('Analytics', { id: silo.id })}
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
