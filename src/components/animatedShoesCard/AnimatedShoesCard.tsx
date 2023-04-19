import React from 'react';
import { Animated } from 'react-native';
import { View } from 'react-native';

import { BrandName, Price, ShoesName } from './styles';

interface AnimatedShoesCardProps {
  index: number;
  cardWidth: number;
  scrollX: Animated.Value;
  item: { spacerItem?: boolean; id: number };
}

const AnimatedShoesCard: React.FC<AnimatedShoesCardProps> = ({
  index,
  scrollX,
  item,
  cardWidth,
}) => {
  const inputRange = [
    (index - 2) * cardWidth, //previous cards
    (index - 1) * cardWidth, //actual card
    index * cardWidth, //next card
  ];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -50, 0],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.4, 1, 0.4],
  });

  return (
    <View style={{ width: cardWidth }} key={item.id}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          marginHorizontal: 16,
          padding: 24,
          transform: [{ translateY }],
          borderRadius: 40,
          opacity: opacity,
        }}
      >
        <BrandName>Nike</BrandName>
        <ShoesName>Air Jordan</ShoesName>
        <Price>R$ 10,00</Price>
      </Animated.View>
    </View>
  );
};

export { AnimatedShoesCard };
