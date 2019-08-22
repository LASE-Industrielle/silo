import React, { useEffect } from 'react';

import {
  RefreshControl,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import styles, { elevationShadowStyle } from '../Styles';
import getSilos from '../services/SiloService';

import SiloPercentage from '../components/SiloPercentage';
import { useStateValue } from '../context/StateContext';

const SilosScreen = (props) => {
  const [{ silos }, dispatch] = useStateValue();

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text>Header</Text>
      </View>
      <View
        style={{
          flex: 0.9,
          justifyContent: 'center',
          alignItems: 'center',
          ...elevationShadowStyle(2, 0.3),
          backgroundColor: 'white',
          margin: 10,
          marginBottom: -10,
          borderRadius: 10,
        }}
      >
        <FlatList
          keyExtractor={item => String(item.id)}
          data={silos.data}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('SiloOverview', { id: item.id })}
            >
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 3,
              }}>
                <SiloPercentage percentage={item.percentage} />
                <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                  <Text>Solingen</Text>
                  <Text style={{ color: '#C5C5C5' }}>Walter-Horn-Weg 1, Solingen</Text>
                </View>
                <View>
                  <Text style={{ color: '#C5C5C5' }}>1d 2w ago</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
          style={{
            width: Dimensions.get('window').width * 0.97,
            paddingTop: 10,
            paddingHorizontal: 15,
          }}
          refreshing={silos.loading}
          onRefresh={() => onRefresh()}
        />
      </View>
    </View>
  );
};

export default SilosScreen;
