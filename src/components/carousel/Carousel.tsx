import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import {
  Ux4gPaginationDotted,
  Ux4gPaginationVariant,
  Ux4gPaginationSize,
} from '../pagination';

// ─── Types ───────────────────────────────────────────────────────────

export interface Ux4gCarouselProps {
  /** Array of React nodes / slide widgets to display in carousel */
  items: React.ReactNode[];
  /** Whether auto-play is enabled (default: true) */
  autoPlay?: boolean;
  /** Auto-play interval in milliseconds (default: 3000ms) */
  autoPlayInterval?: number;
  /** Whether to show the bottom pagination dots (default: true) */
  showPagination?: boolean;
  /** Carousel container height (default: 200) */
  height?: number;
  /** Fraction of the viewport occupied by each item (default: 1.0) */
  viewportFraction?: number;
  /** Pagination variant: 'default' | 'defaultVariant' | 'capsule' (default: 'default') */
  paginationVariant?: Ux4gPaginationVariant;
  /** Pagination size: 'small' | 'medium' (default: 'small') */
  paginationSize?: Ux4gPaginationSize;
  /** Custom active indicator color */
  activeColor?: string;
  /** Custom inactive indicator & arrow button background color */
  inactiveColor?: string;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
}

// ─── Main Component ──────────────────────────────────────────────────

export const Ux4gCarousel: React.FC<Ux4gCarouselProps> = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 3000,
  showPagination = true,
  showArrows = false,
  height = 200,
  viewportFraction = 1.0,
  paginationVariant = 'default',
  paginationSize = 'small',
  activeColor,
  inactiveColor,
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(
    Dimensions.get('window').width
  );

  const flatListRef = useRef<FlatList>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInteractingRef = useRef<boolean>(false);

  const totalItems = items.length;
  const itemWidth = containerWidth * Math.min(Math.max(viewportFraction, 0.1), 1.0);
  const sidePadding = (containerWidth - itemWidth) / 2;

  // ── Auto-play Timer Logic ──

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (!autoPlay || totalItems <= 1) return;

    timerRef.current = setInterval(() => {
      if (isInteractingRef.current) return;

      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalItems;
        flatListRef.current?.scrollToOffset({
          offset: nextIndex * itemWidth,
          animated: true,
        });
        return nextIndex;
      });
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, totalItems, itemWidth, stopTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  // ── Handlers ──

  const handleLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    if (width > 0 && width !== containerWidth) {
      setContainerWidth(width);
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / itemWidth);
    const clampedIndex = Math.min(Math.max(index, 0), totalItems - 1);
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    }
  };

  const handleScrollBeginDrag = () => {
    isInteractingRef.current = true;
    stopTimer();
  };

  const handleScrollEndDrag = () => {
    isInteractingRef.current = false;
    startTimer();
  };

  const handlePageChange = (index: number) => {
    stopTimer();
    setCurrentIndex(index);
    flatListRef.current?.scrollToOffset({
      offset: index * itemWidth,
      animated: true,
    });
    startTimer();
  };

  if (totalItems === 0) {
    return <View style={[{ height }, style]} />;
  }

  return (
    <View
      onLayout={handleLayout}
      style={[
        {
          height,
          width: '100%',
          position: 'relative',
        },
        style,
      ]}
    >
      <FlatList
        ref={flatListRef}
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={viewportFraction === 1.0}
        snapToInterval={viewportFraction !== 1.0 ? itemWidth : undefined}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: viewportFraction !== 1.0 ? sidePadding : 0,
        }}
        keyExtractor={(_, index) => index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth, height: '100%' }}>
            {item}
          </View>
        )}
      />

      {showPagination && totalItems > 1 && (
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          pointerEvents="box-none"
        >
          <Ux4gPaginationDotted
            totalPageCount={totalItems}
            currentPageIndex={currentIndex}
            onPageChange={handlePageChange}
            showArrows={showArrows}
            variant={paginationVariant}
            size={paginationSize}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            containerStyle={{ alignSelf: 'center' }}
          />
        </View>
      )}
    </View>
  );
};

export default Ux4gCarousel;
