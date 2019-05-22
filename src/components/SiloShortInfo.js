import React from 'react';
import {
  Button,
  Container,
  Content,
  Form,
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
import AnalyticsIcon from "../icons/AnalyticsIcon";

const CardItemBordered = (props) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Content:</Label>
            <Input disabled value={'Soil'}/>
          </Item>
          <Item fixedLabel>
            <Label>Capacity:</Label>
            <Input disabled value={'6000 kg'}/>
          </Item>
        </Form>
        <List>
          <ListItem itemDivider>
            <Text style={{ color: '#676767' }}>Average</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>68%</Text>
            </Left>
            <Right>
              <Text note>15th May</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>11%</Text>
            </Left>
            <Right>
              <Text note>14th May</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>26%</Text>
            </Left>
            <Right>
              <Text note>13th May</Text>
            </Right>
          </ListItem>
        </List>
        <Button
          block
          primary
          onPress={() => props.test.navigation.navigate('Analytics')}
          style={styles.buttonStyle}
        >
          <AnalyticsIcon/>
          <Text style={{
            color: 'white',
            fontSize: 14,
            marginLeft: -15,
          }}>Analytics</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default CardItemBordered;
