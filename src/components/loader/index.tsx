import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../helpers/colors';

const Loader = ({
  visible,
  onClose,
  title = 'Loading...',
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
}) => {
  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <ActivityIndicator size={30} color={Colors.PRIMARY} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000004a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    width: '80%',
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    gap: 20,
    paddingTop: 30,
  },
  text: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Loader;
