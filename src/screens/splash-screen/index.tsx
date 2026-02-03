import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationRoutes } from '../../enums/navigation';
import { Colors } from '../../helpers/colors';

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
    color: Colors.PRIMARY,
  },
  text: {
    fontSize: 20,
    color: Colors.BACKGROUND,
    fontWeight: '800',
  },
});

export default SplashScreen;
