import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageWrapper from '../../components/page-wrapper';
import { Colors } from '../../helpers/colors';

const WalletScreen = ({ navigation }: { navigation: any }) => {
  return (
    <PageWrapper navigation={navigation} title="Wallet">
      <View style={styles.container}>
        <Text style={styles.text}>Wallet Screen</Text>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.BACKGROUND,
  },
  text: {
    fontSize: 20,
    color: Colors.TEXT,
    fontWeight: '800',
  },
});
export default WalletScreen;
