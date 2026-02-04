import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import PageWrapper from '../../components/page-wrapper';
import ProductCard from '../../components/product-card';
import { Colors } from '../../helpers/colors';
import { HttpStatus } from '../../helpers/http-helper';
import { ProductService } from '../../service/products';
import { ProductBO } from '../../types/products';
import Loader from '../../components/loader';
import ActionModal from '../../components/action-modal';
import { LocalImages } from '../../assets/images/images';

const PER_PAGE = 6;
const SWIPE_VELOCITY_THRESHOLD = 500;

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<ProductBO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<{
    visible: boolean;
    title: string;
    message: string;
  }>({
    visible: false,
    title: '',
    message: '',
  });
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
      setLoading(true);
      const response = await ProductService.getAllProducts();

      if (response.status === HttpStatus.SUCCESS && response.data) {
        allProducts.current = response.data.data.products;
        setPage(1);
        if (response.data.data.products.length === 0) {
          setModalConfig({
            visible: true,
            title: 'No Products',
            message: 'There are no products available at the moment.',
          });
        }
      } else if (response.status === HttpStatus.NOTFOUND) {
        allProducts.current = [];
        setProducts([]);
        setModalConfig({
          visible: true,
          title: 'Not Found',
          message: 'Products not found. Please try again later.',
        });
      } else {
        allProducts.current = [];
        setProducts([]);
        setModalConfig({
          visible: true,
          title: 'Error',
          message: 'An unexpected error occurred. Please try again.',
        });
      }
    } catch (error) {
      allProducts.current = [];
      setProducts([]);
      setModalConfig({
        visible: true,
        title: 'Network Error',
        message:
          'Unable to connect to the server. Please check your internet connection.',
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = useCallback(() => {
    setModalConfig(prev => ({ ...prev, visible: false }));
  }, []);

  useEffect(() => {
    if (page > 0) {
      setLoading(true);
      const startIndex = (page - 1) * PER_PAGE;
      const paginatedProducts = allProducts.current.slice(
        startIndex,
        startIndex + PER_PAGE,
      );
      setProducts(paginatedProducts);
      setLoading(false);
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
      Gesture.Pan()
        .activeOffsetX([-15, 15])
        .failOffsetY([-10, 10])
        .onEnd(e => {
          if (Math.abs(e.velocityY) > Math.abs(e.velocityX)) {
            return;
          }
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

  const renderHeader = useCallback(
    () => (
      <View style={styles.banner}>
        <Image
          source={LocalImages.banner}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    ),
    [],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Products Found</Text>
        <Text style={styles.emptyText}>
          There are no products available at the moment.
        </Text>
        <Text style={styles.emptyText}>Please check back later.</Text>
      </View>
    ),
    [],
  );

  return (
    <>
      <PageWrapper navigation={navigation} title="Home">
        <View style={styles.container}>
          <GestureDetector gesture={panGesture}>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              ListHeaderComponent={renderHeader}
              ListEmptyComponent={renderEmptyComponent}
              contentContainerStyle={styles.listContent}
              columnWrapperStyle={styles.columnWrapper}
            />
          </GestureDetector>
        </View>
      </PageWrapper>
      <Loader visible={loading} onClose={() => setLoading(false)} />
      <ActionModal
        visible={modalConfig.visible}
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.message}
        okText="Try Again"
        needCancel={false}
        onSubmit={async () => {
          closeModal();
          await init();
        }}
      />
    </>
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
    flexGrow: 1,
  },
  columnWrapper: {
    gap: 10,
    marginBottom: 10,
  },
  banner: {
    height: 150,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: Colors.BACKGROUND,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.TEXT,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.TEXT,
    textAlign: 'center',
    opacity: 0.6,
    lineHeight: 20,
  },
});

export default HomeScreen;
