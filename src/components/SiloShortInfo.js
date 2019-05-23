import React from 'react';
import {
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

import { SILO_DEFAULT_CONTENT } from '../Constants';


const CardItemBordered = ({ silo }) => {

  const getCardItems = () => {
    const dateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };

    return Object.keys(silo.last_days_in_average)
      .map(key =>
        <ListItem key={key}>
          <Left>
            <Text>{silo.last_days_in_average[key]}%</Text>
          </Left>
          <Right>
            <Text note>{new Date(key).toLocaleDateString('en-US', dateOptions)}</Text>
          </Right>
        </ListItem>
      );
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Content:</Label>
            <Input disabled value={SILO_DEFAULT_CONTENT}/>
          </Item>
          <Item fixedLabel>
            <Label>Capacity:</Label>
            <Input disabled value={`${silo.percentage * silo.capacity / 100}/${silo.capacity} kg`}/>
          </Item>
        </Form>
        <List>
          <ListItem itemDivider>
            <Text style={{ color: '#676767' }}>Average</Text>
          </ListItem>
          {getCardItems()}
        </List>
      </Content>
    </Container>
  );
};

export default CardItemBordered;
