import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../helpers/colors';
import Icon from '../icon';

const ActionModal = ({
  visible,
  onClose,
  title,
  description,
  needCancel = true,
  okText = 'Submit',
  onSubmit,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  needCancel?: boolean;
  okText?: string;
  onSubmit: () => void;
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
          <View style={styles.headerWrapper}>
            <Text style={[styles.text, { fontWeight: '700' }]}>{title}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onClose}
              hitSlop={{
                bottom: 10,
                left: 10,
                right: 10,
                top: 10,
              }}
            >
              <Icon icon="CloseIcon" size={16} color={Colors.PRIMARY} />
            </TouchableOpacity>
          </View>
          {description && <Text style={styles.text}>{description}</Text>}
          <View style={styles.buttonWrapper}>
            {needCancel && (
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.text}>Close</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.PRIMARY }]}
              onPress={onSubmit}
            >
              <Text style={[styles.text, { color: Colors.BACKGROUND }]}>
                {okText}
              </Text>
            </TouchableOpacity>
          </View>
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalWrapper: {
    width: '80%',
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  text: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
});

export default ActionModal;
