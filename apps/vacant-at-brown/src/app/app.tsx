import React, { useEffect, useState } from 'react';

import MapView from '../components/Map';

export interface Message {
  message: string;
}

export const App = () => {
  return <MapView />
}

export default App;
