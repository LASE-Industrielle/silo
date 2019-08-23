import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, RefreshControl, ScrollView,
} from 'react-native';

import { useStore } from '../context/StateContext';
import getSilos from '../services/SiloService';

import GraphWidget from '../components/GraphWidget';
import SiloDetailsTable from '../components/SiloDetailsTable';
import GradientHeaderComponent from '../components/GradientHeaderComponent';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: { flex: 0.1, alignItems: 'center', justifyContent: 'center' },
});

const SiloDetailsScreen = (props) => {
  const [{ silos }, dispatch] = useStore();
  const id = props.navigation.getParam('id', '');
  const [silo, setSilo] = useState();

  useEffect(() => {
    getSilos(dispatch);
  }, []);

  useEffect(() => {
    setSilo(silos.data.find(s => s.id === id));
    props.navigation.setParams({ siloDetails: silo });
  }, [silos.data]);

  const onRefresh = () => {
    getSilos(dispatch);
  };

  if (silos.data.length === 0 || silo === undefined) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <GradientHeaderComponent backgroundColor={'#6CC699'}>
      <ScrollView
        style={style.mainContainer}
        refreshControl={<RefreshControl refreshing={silos.loading} onRefresh={onRefresh} />}
      >
        <GraphWidget silo={silo} />
        <SiloDetailsTable silo={silo} />
      </ScrollView>
    </GradientHeaderComponent>
  );
};

export default SiloDetailsScreen;
