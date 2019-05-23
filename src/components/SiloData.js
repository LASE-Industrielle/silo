import React from 'react';

import { Form, Input, Item, Label } from 'native-base';

const SiloData = ({ width, height, capacity, location }) => {
  return (
    <Form>
      <Item fixedLabel>
        <Label>Width:</Label>
        <Input disabled value={width.toString() + ' m'}/>
      </Item>
      <Item fixedLabel>
        <Label>Height:</Label>
        <Input disabled value={height.toString() + ' m'}/>
      </Item>
      <Item fixedLabel>
        <Label>Capacity:</Label>
        <Input disabled value={capacity.toString() + ' kg'}/>
      </Item>
      <Item fixedLabel>
        <Label>Location:</Label>
        <Input disabled value={location}/>
      </Item>
    </Form>
  );
};

export default SiloData;
