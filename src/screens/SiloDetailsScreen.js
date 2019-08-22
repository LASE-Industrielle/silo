import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, RefreshControl, ScrollView,
} from 'react-native';

import { useStore } from '../context/StateContext';
import getSilos from '../services/SiloService';

import GraphWidget from '../components/GraphWidget';
import SiloDetailsTable from '../components/SiloDetailsTable';

const style = StyleSheet.create({
  mainContainer: { flex: 1, flexDirection: 'column', marginTop: 30 },
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
    <ScrollView
      style={style.mainContainer}
      refreshControl={<RefreshControl refreshing={silos.loading} onRefresh={onRefresh} />}
    >
      <View style={style.header}>
        <Text>Header</Text>
      </View>
      <GraphWidget />
      <SiloDetailsTable silo={silo} />
    </ScrollView>
  );
};

export default SiloDetailsScreen;
