import React from 'react';
import {View} from 'react-native';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';

import SiloData from "../components/SiloData";
import SensorData from "../components/SensorData";

const SiloConfigScreen = (props) => {

    const silo = props.navigation.getParam('siloDetails', {});

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Configuration</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <View>
                    <SiloData width={silo.width} height={silo.height} capacity={silo.capacity} location={silo.location} />
                    <SensorData type={silo.sensor.type} serialNumber={silo.sensor.serial_number} />
                </View>
            </Content>

        </Container>
    )
}

export default SiloConfigScreen;