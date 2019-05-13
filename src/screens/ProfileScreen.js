import React, { useContext } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Thumbnail, Button } from 'native-base';

import styles from '../Styles';
import ccLogo from '../../assets/img/cc.jpg';
import UserContext from '../context/UserContext';
import resetAction from '../utils/NavigationUtils';

const ProfileScreen = (props) => {
  const { username, logoutUser } = useContext(UserContext);

  const logout = () => {
    logoutUser();
    props.navigation.dispatch(resetAction);
  };

  return (
    <View style={styles.default}>
      <Text>{username}</Text>
      <Thumbnail large source={ccLogo} />
      <Button
        block
        style={{ margin: 20 }}
        onPress={logout}
      >
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileScreen;
