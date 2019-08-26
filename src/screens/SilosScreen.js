import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Dimensions, TouchableWithoutFeedback, Platform
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
    <GradientHeaderComponent backgroundColor={'#F2F2F2'}>
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
            paddingTop: Platform.OS === "ios" ? 0 : 20
          }}
        >
          <FlatList
            keyExtractor={item => String(item.id)}
            data={silos.data}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('SiloOverview', { id: item.id, title: item.name })}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 3,
                    marginHorizontal: Platform.OS === "ios" ? 0 : 20,
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
            ItemSeparatorComponent={() => (
              <View
                style={{
                  margin: 5,
                  borderColor: '#BEB9B9',
                  borderWidth: 0.5,
                  marginHorizontal: 20,
                }}
              />
            )}
            style={{
              width: Dimensions.get('window').width * 0.97,
              padding: 15,
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
