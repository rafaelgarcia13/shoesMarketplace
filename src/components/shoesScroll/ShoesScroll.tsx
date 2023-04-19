import React, { useRef } from 'react';
import { useWindowDimensions, Animated } from 'react-native';
import { AnimatedShoesCard } from '@components/animatedShoesCard/AnimatedShoesCard';

import { SpacerView } from './styles';
import { RedShoes } from '@svg';

const ShoesScroll: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();

  const SHOES_CARD_WIDTH = width * 0.72;
  const SPACER_VIEW_WIDTH = (width - SHOES_CARD_WIDTH) / 2;

  const data = [
    { spacerItem: true, id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { spacerItem: true, id: 8 },
  ];

  return (
    <>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: 66,
          paddingBottom: 16,
          alignItems: 'center',
        }}
        horizontal
        snapToInterval={SHOES_CARD_WIDTH}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
      >
        {data.map((item, index) =>
          item.spacerItem ? (
            <SpacerView width={SPACER_VIEW_WIDTH} key={index} />
          ) : (
            <AnimatedShoesCard
              key={index}
              index={index}
              scrollX={scrollX}
              item={item}
              cardWidth={SHOES_CARD_WIDTH}
            />
          ),
        )}
      </Animated.ScrollView>
      <RedShoes width={250} height={250} />
    </>
  );
};

export { ShoesScroll };
