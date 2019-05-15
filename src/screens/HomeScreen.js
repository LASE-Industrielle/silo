import React, {useContext, useEffect, useReducer} from 'react';

import {statusReducer} from '../Reducers';
import downloadData from '../services/SiloService';
import UserContext from '../context/UserContext';
import {Container, Content, Header, Icon, Left, List, ListItem, Right, Text} from 'native-base';

const initialState = {
    data: [],
    errorMessage: '',
    loading: false,
};


const HomeScreen = (props) => {
    const [state, dispatch] = useReducer(statusReducer, initialState);
    const {token} = useContext(UserContext);

    useEffect(() => {
        downloadData(dispatch, token);
    }, []);

    return (
        <Container>
            <Header transparent>
                <Text>All silos</Text>
            </Header>
            <Content>
                <List>
                    {state.data.map(item =>
                        <ListItem key={item.id} onPress={() => {
                            props.navigation.navigate('SiloDetails', item)
                        }}>
                            <Left>
                                <Text>{item.location} - {item.percentage}%</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    )}
                </List>
            </Content>
        </Container>
    );

};

export default HomeScreen;
