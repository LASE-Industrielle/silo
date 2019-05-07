import React from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';

const AnalyticsScreen = () => (
  <Container>
    <Header>
      <Text>Analytics</Text>
    </Header>
    <Content>
      <List>
        <ListItem itemDivider>
          <Text>16.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>83% at 17:31</Text>
        </ListItem>
        <ListItem>
          <Text>51% at 15:31</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>15.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>21% at 21:14</Text>
        </ListItem>
        <ListItem>
          <Text>31% at 14:21</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>14.05.2019</Text>
        </ListItem>
        <ListItem>
          <Text>15% at 12:16</Text>
        </ListItem>
        <ListItem>
          <Text>89% at 10:29</Text>
        </ListItem>
      </List>
    </Content>
  </Container >
);

export default AnalyticsScreen;
