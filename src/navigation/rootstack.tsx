import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash-screen';
import MainTab from './maintab';
import { NavigationRoutes } from '../enums/navigation';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NavigationRoutes.SPLASH} component={SplashScreen} />
        <Stack.Screen name={NavigationRoutes.MAIN} component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
