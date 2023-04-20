import React, { useRef } from 'react';
import { useWindowDimensions, Animated, Text } from 'react-native';
import { AnimatedShoesCard } from '@components/animatedShoesCard/AnimatedShoesCard';

import { SpacerView } from './styles';
import { shoesData } from '../../shoesData';

const ShoesScroll: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();

  const SHOES_CARD_WIDTH = width * 0.72;
  const SPACER_VIEW_WIDTH = (width - SHOES_CARD_WIDTH) / 2;

  return (
    <Animated.ScrollView
      contentContainerStyle={{ alignItems: 'center' }}
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
      {shoesData.map((shoesInfo, index) =>
        shoesInfo.fakerShoes ? (
          <SpacerView width={SPACER_VIEW_WIDTH} key={index} />
        ) : (
          <AnimatedShoesCard
            key={index}
            index={index}
            scrollX={scrollX}
            shoesInfo={shoesInfo}
            cardWidth={SHOES_CARD_WIDTH}
          />
        ),
      )}
    </Animated.ScrollView>
  );
};

export { ShoesScroll };
