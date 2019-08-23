import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = (backgroundColor) => StyleSheet.create({
  outerView: {
    height: '100%',
    backgroundColor: '#F2F2F2',
  },
  innerView: {
    backgroundColor: backgroundColor,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
    //borderBottomLeftRadius: 12,
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


const GradientHeaderComponent = ({ backgroundColor, children }) => (
  <View style={styles().outerView}>
    <View style={styles(backgroundColor).innerView}>
      <LinearGradient useAngle angle={179} angleCenter={{ x: 0.5, y: 0.5 }} style={styles().linearGradient} colors={['#6CC799', '#65BD94']} />
    </View>
    {children}
  </View>
);

export default GradientHeaderComponent;
