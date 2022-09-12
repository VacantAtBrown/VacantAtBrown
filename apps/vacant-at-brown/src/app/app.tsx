import React, { useEffect, useState } from 'react';
import MapView from '../components/Map';
import { SidePanel } from './SidePanel/SidePanel';

export const App = () => {
  return (
    <div className="overflow-hidden w-100 h-100">
      <MapView />
      <SidePanel />
    </div>
  );
};

export default App;
