import React from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text
} from 'native-base';

import styles from '../Styles';

const CardItemBordered = (props) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body style={styles.default}>
            <Text>
              Last time filled 34% 24jh
            </Text>
            <Text>
              Capacity: 25000 Serial: #sdasd
            </Text>
            </Body>
          </CardItem>
        </Card>
        <List>
          <ListItem>
            <Text>83% at 17:31</Text>
          </ListItem>
          <ListItem>
            <Text>83% at 17:31</Text>
          </ListItem>
          <ListItem>
            <Text>51% at 15:31</Text>
          </ListItem>
        </List>
        <Button
          block
          primary
          onPress={() => props.test.navigation.navigate('Analytics')}
          style={styles.buttonStyle}
        >
          <Icon name='stats' style={{ color: 'white'}}/>
          <Text style={{
            color: 'white',
            fontSize: 14,
            marginLeft: -25,
          }}>Analytics</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default CardItemBordered;
