import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import PageWrapper from '../../components/page-wrapper';
import ProductCard from '../../components/product-card';
import { Colors } from '../../helpers/colors';
import { HttpStatus } from '../../helpers/http-helper';
import { ProductService } from '../../service/products';
import { ProductBO } from '../../types/products';

const PER_PAGE = 6;
const SWIPE_VELOCITY_THRESHOLD = 500;

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<ProductBO[]>([]);
  const allProducts = useRef<ProductBO[]>([]);
  const [page, setPage] = useState<number>(0);

  const maxPages = useMemo(
    () => Math.ceil(allProducts.current.length / PER_PAGE),
    [allProducts.current.length],
  );

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await ProductService.getAllProducts();

      if (response.status === HttpStatus.SUCCESS && response.data) {
        allProducts.current = response.data.data.products;
        setPage(1);
      } else {
        allProducts.current = [];
        setProducts([]);
      }
    } catch (error) {
      allProducts.current = [];
      setProducts([]);
    }
  };

  useEffect(() => {
    if (page > 0) {
      const startIndex = (page - 1) * PER_PAGE;
      const paginatedProducts = allProducts.current.slice(
        startIndex,
        startIndex + PER_PAGE,
      );
      setProducts(paginatedProducts);
    }
  }, [page]);

  const handleSwipeLeft = useCallback(() => {
    setPage(prev => (prev < maxPages ? prev + 1 : prev));
  }, [maxPages]);

  const handleSwipeRight = useCallback(() => {
    setPage(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  const panGesture = useMemo(
    () =>
      Gesture.Pan().onEnd(e => {
        if (e.velocityX < -SWIPE_VELOCITY_THRESHOLD) {
          handleSwipeLeft();
        } else if (e.velocityX > SWIPE_VELOCITY_THRESHOLD) {
          handleSwipeRight();
        }
      }),
    [handleSwipeLeft, handleSwipeRight],
  );

  const renderItem = useCallback(
    ({ item }: { item: ProductBO }) => <ProductCard item={item} />,
    [],
  );

  return (
    <PageWrapper navigation={navigation} title="Home">
      <View style={styles.container}>
        <GestureDetector gesture={panGesture}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContent}
            columnWrapperStyle={styles.columnWrapper}
          />
        </GestureDetector>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.BACKGROUND,
  },
  listContent: {
    paddingHorizontal: 15,
    marginTop: 5,
  },
  columnWrapper: {
    gap: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
