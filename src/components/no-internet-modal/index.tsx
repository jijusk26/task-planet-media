import React from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../helpers/colors';
import Icon from '../icon';

const NoInternetModal = ({ visible }: { visible: boolean }) => {
  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <View style={styles.iconContainer}>
            <Icon icon="OfflineIcon" size={80} color={Colors.PRIMARY} />
          </View>
          <Text style={styles.title}>No Internet</Text>
          <Text style={styles.description}>
            It's look like you're not connected to the internet. Please check
            your connection and try again.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000006a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    width: '85%',
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    gap: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.BORDER,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.7,
  },
});

export default NoInternetModal;
