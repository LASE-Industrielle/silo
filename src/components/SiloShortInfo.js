import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem
} from 'native-base';

import styles from '../Styles';

const CardItemBordered = () => {
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
        </Content>
      </Container>
    );
};

export default CardItemBordered;
