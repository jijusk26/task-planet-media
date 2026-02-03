import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
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

export default HomeScreen;
