
import React from 'react';

import './App.css';
import Navigation from './Navigation';
import Loginform from './Loginform';

function App() {
  return (
    <div>
      <Navigation />
      <div className="centered">
        <Loginform />
      </div>
    </div>
  );
}

export default App;
