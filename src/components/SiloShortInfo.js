import React from 'react';
import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Left,
  List,
  ListItem,
  Right,
  Text
} from 'native-base';

import styles from '../Styles';

const CardItemBordered = (props) => {
  return (
    <Container>
      <Content>
            <Form>
              <Item fixedLabel>
                <Label>Change:</Label>
                <Input disabled value={'23%'}/>
              </Item>
              <Item fixedLabel>
                <Label>Capacity:</Label>
                <Input disabled value={'43333 / 60000'}/>
              </Item>
            </Form>
        <List>
          <ListItem itemDivider>
            <Text style={{ color: '#676767' }}>13th May 2016</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>11%</Text>
            </Left>
            <Right>
              <Text note>17:31</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>11%</Text>
            </Left>
            <Right>
              <Text note>17:31</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>11%</Text>
            </Left>
            <Right>
              <Text note>17:31</Text>
            </Right>
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
