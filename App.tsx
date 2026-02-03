import React from 'react';
import RootStack from './src/navigation/rootstack';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor={'#fff'} />
      <RootStack />
    </>
  );
};

export default App;
