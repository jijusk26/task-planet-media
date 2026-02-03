import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationRoutes } from '../../enums/navigation';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setTimeout(() => {
      navigation.replace(NavigationRoutes.MAIN);
    }, 1000);
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.text}>Stop Shop</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
  },
});

export default SplashScreen;
