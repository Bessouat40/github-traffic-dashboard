import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Repositories from './components/Repositories';

const App = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('http://localhost:8000/getUser', {
        method: 'GET',
      });
      const data = await response.json();
      setUser(data['user']);
    };
    getUser();
  }, []);

  return (
    <div>
      <Header user={user} />
      {/* <Icon user={user} />
      <Info /> */}
      <Repositories />
    </div>
  );
};

export default App;
