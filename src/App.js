import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './components/Login/spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('TOKEN >>>>>>>>>>> ', _token)
  }, []);

  return (
    <div className="app">
      {
        token ? (
          // <Player/>
          <h1>I am logged in</h1>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
