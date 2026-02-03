import React from 'react';
import RootStack from './src/navigation/rootstack';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={'#fff'} />
      <RootStack />
    </GestureHandlerRootView>
  );
};

export default App;
