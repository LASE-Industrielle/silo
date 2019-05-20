import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import AppContainer from './Navigation';
import UserContext from './context/UserContext';

const TOKEN_KEY = 'TOKEN';

const App = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const loadToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
      if (storedToken !== undefined && storedToken !== '') {
        setToken(storedToken);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    loadToken();
  }, []);

  const loginUser = async (newUsername, newToken) => {
    setUsername(newUsername);
    setToken(newToken);
    try {
      await AsyncStorage.setItem(TOKEN_KEY, newToken);
    } catch (e) {
      // saving error
    }
  };

  const logoutUser = () => {
    setUsername('');
    setToken('');
  };

  return (
    <UserContext.Provider value={{
      username,
      token,
      loginUser,
      logoutUser,
    }}
    >
      <AppContainer/>
    </UserContext.Provider>
  );
};

export default App;
