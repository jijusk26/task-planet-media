import React, { useEffect, useState } from 'react';
import RootStack from './src/navigation/rootstack';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from './src/components/no-internet-modal';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={'#fff'} />
      <RootStack />
      <NoInternetModal visible={!isConnected} />
    </GestureHandlerRootView>
  );
};

export default App;
