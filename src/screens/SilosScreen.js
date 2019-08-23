import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Dimensions, TouchableWithoutFeedback,
} from 'react-native';

import { useStore } from '../context/StateContext';
import getSilos from '../services/SiloService';

import GradientHeaderComponent from '../components/GradientHeaderComponent';
import SiloPercentage from '../components/SiloPercentage';

import { elevationShadowStyle } from '../Styles';

const SilosScreen = (props) => {
  const [{ silos }, dispatch] = useStore();

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  return (
    <GradientHeaderComponent>
      <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...elevationShadowStyle(),
            backgroundColor: 'white',
            margin: 10,
            marginBottom: 0,
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
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 3,
                  }}
                >
                  <SiloPercentage percentage={item.percentage} />
                  <View
                    style={{ justifyContent: 'center', flexDirection: 'column', marginLeft: 5 }}
                  >
                    <Text>{item.name}</Text>
                    <Text style={{ color: '#C5C5C5' }}>{item.location}</Text>
                  </View>
                  <View>
                    <Text style={{ color: '#C5C5C5' }}>{item.last_updated}</Text>
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
    </GradientHeaderComponent>
  );
};

export default SilosScreen;
