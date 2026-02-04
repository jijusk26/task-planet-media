import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationRoutes } from '../../enums/navigation';
import { Colors } from '../../helpers/colors';
import { SvgXml } from 'react-native-svg';
import { AppLogoIcon } from '../../assets/app-logo-svg';

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
      <StatusBar
        hidden
        barStyle="dark-content"
        translucent
        backgroundColor={'#fff'}
      />
      <View style={styles.container}>
        <SvgXml xml={AppLogoIcon} width={100} />
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
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    fontSize: 20,
    color: Colors.BACKGROUND,
    fontWeight: '800',
  },
});

export default SplashScreen;
