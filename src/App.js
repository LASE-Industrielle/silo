import React, { useState } from 'react';
import AppContainer from './Navigation';
import UserContext from './context/UserContext';


const App = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{
      username,
      loginUserMock: newUsername => setUsername(newUsername),
      logoutUserMock: () => setUsername(''),
    }}
    >
      <AppContainer />
    </UserContext.Provider>
  );
};

export default App;
