import React from 'react';

import { Form, Input, Item, Label } from 'native-base';

const SensorData = (props) => {

  const { serialNumber, type } = props;

  return (
    <Form>
      <Item fixedLabel>
        <Label>Serial Number:</Label>
        <Input disabled value={serialNumber}/>
      </Item>
      <Item fixedLabel>
        <Label>Type:</Label>
        <Input disabled value={type}/>
      </Item>
    </Form>
  );
};

export default SensorData;
