import React, { useEffect, useState } from 'react';
import MapView from '../components/Map';

export const App = () => {
  var t = 9;

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to vacant-at-brown!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <MapView />
    </>
  );
};

export default App;
