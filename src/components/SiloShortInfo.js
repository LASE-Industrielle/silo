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


const CardItemBordered = (props) => {
  const silo = props.silo;

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
            <Input disabled value={`${silo.capacity} kg`}/>
          </Item>
        </Form>
        <List>
          <ListItem itemDivider>
            <Text style={{ color: '#676767' }}>Average</Text>
          </ListItem>
          {Object.keys(silo.last_days_in_average).map(key =>
              <ListItem key={key}>
                <Left>
                  <Text>{silo.last_days_in_average[key]}%</Text>
                </Left>
                <Right>
                  <Text note>{new Date(key).toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
                </Right>
              </ListItem>
          )}
        </List>
      </Content>
    </Container>
  );
};

export default CardItemBordered;
