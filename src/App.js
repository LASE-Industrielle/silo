import React, { useState } from 'react';

import AppContainer from './Navigation';
import UserContext from './context/UserContext';

const App = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const loginUser = async (newUsername, newToken) => {
    setUsername(newUsername);
    setToken(newToken);
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
