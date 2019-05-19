import React from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title, Footer} from 'native-base';

import SiloOverview from '../components/SiloOverview';

const SiloDetailsScreen = (props) => {

    const silo = props.navigation.getParam('item', {});

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.navigation.navigate('Home')}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Silo overview</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => props.navigation.navigate('SiloConfig', {siloDetails:silo})}>
                        <Icon name="settings" />
                    </Button>
                </Right>
            </Header>

            <Content>
                    <SiloOverview silo={silo}/>

            </Content>
            <Footer>
                <Button transparent onPress={() => props.navigation.navigate('Analytics')}>
                    <Icon name="stats" />
                </Button>
            </Footer>
        </Container>
    )
}

export default SiloDetailsScreen;