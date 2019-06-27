import React, {useEffect} from 'react';

import { RefreshControl } from 'react-native';

import styles from '../Styles';
import getSilos from '../services/SiloService';

import {Body, Container, Content, Header, Left, List, ListItem, Right, Text, Title} from 'native-base';

import SiloPercentage from '../components/SiloPercentage';
import {useStateValue} from "../context/StateContext";


const SilosScreen = (props) => {
  const [{silos}, dispatch] = useStateValue();

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
          {silos.data.length > 0 ? <Text note>Updated</Text> : <Text note/>}
        </Right>
      </Header>
      <Content refreshControl={<RefreshControl
        refreshing={silos.loading}
        onRefresh={onRefresh}
      />}>
        <List>
          {silos.data.map(item =>
            <ListItem key={item.id} onPress={() => {
              props.navigation.navigate("SiloOverview", {
                id: item.id
              });
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
