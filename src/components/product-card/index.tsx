import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../helpers/colors';
import { ProductBO } from '../../types/products';
import LinearGradient from 'react-native-linear-gradient';

const ProductCard = ({ item }: { item: ProductBO }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <LinearGradient
          colors={[Colors.BACKGROUND, Colors.BORDER]}
          style={styles.linearBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <Image
          source={{ uri: item.image }}
          style={{ height: 150 }}
          resizeMode="center"
        />
      </View>
      <View style={styles.labelWrapper}>
        <Text
          style={[styles.itemName, { width: '80%' }]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {item.product_name}
        </Text>
        <Text style={styles.itemName}>{'₹ ' + item.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderColor: Colors.BORDER,
    borderWidth: 1,
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
  },
  imageWrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  itemName: {
    fontSize: 10,
    color: Colors.BACKGROUND,
    fontWeight: '800',
  },
  labelWrapper: {
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  linearBackground: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProductCard;
