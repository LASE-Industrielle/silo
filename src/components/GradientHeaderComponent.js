import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  outerView: {
    height: '100%',
    backgroundColor: '#F2F2F2',
  },
  linearGradient: {
    height: 88,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
    borderBottomLeftRadius: 12,
  },
});


const GradientHeaderComponent = ({ children }) => (
  <View style={styles.outerView}>
    <LinearGradient useAngle angle={179} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.linearGradient} colors={['#6CC799', '#3A7F78']} />
    {children}
  </View>
);

export default GradientHeaderComponent;
