import React, { ReactElement } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../icon';
import { Colors } from '../../helpers/colors';

const PageWrapper = ({
  children,
  enableBackButton,
  navigation,
  showHeader = true,
  title = '',
}: {
  children: ReactElement;
  navigation?: any;
  enableBackButton?: boolean;
  showHeader?: boolean;
  title?: string;
}) => {
  return (
    <View style={styles.container}>
      {showHeader && (
        <View style={styles.headerWraper}>
          <View style={styles.titleWrapper}>
            {enableBackButton && (
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.notificationIcon}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon icon="BackIcon" size={24} />
              </TouchableOpacity>
            )}
            <Text
              style={{
                ...styles.heading,
                paddingLeft: enableBackButton ? 0 : 10,
              }}
            >
              {title}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.notificationIcon}>
            <Icon icon="NotificationIcon" size={20} />
          </TouchableOpacity>
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 20,
    color: Colors.TEXT,
    fontWeight: '800',
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    color: Colors.TEXT,
  },
  headerWraper: {
    height: 55,
    elevation: 1,
    backgroundColor: Colors.BACKGROUND,
    borderBottomColor: Colors.BORDER,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default PageWrapper;
