import { RedShoes } from '@svg';
import React, { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Shoes } from '../../shoesData';

import { BrandName, Price, ShoesName, AnimatedView } from './styles';
import { useAnimatedShoesCard } from './useAnimatedShoesCard';

interface AnimatedShoesCardProps {
  index: number;
  cardWidth: number;
  scrollX: Animated.Value;
  shoesInfo: Shoes;
}

const AnimatedShoesCard: React.FC<AnimatedShoesCardProps> = ({
  index,
  scrollX,
  shoesInfo,
  cardWidth,
}) => {
  const { opacity, rotateY, translateY, scaleAnimated, startScaleAnimated } =
    useAnimatedShoesCard(index, cardWidth, scrollX);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={startScaleAnimated}
      style={{ width: cardWidth }}
      key={shoesInfo.id}
    >
      <AnimatedView
        backgroundColor={shoesInfo.backgroundColor}
        style={{
          transform: [{ translateY }, { rotateY }, { scale: scaleAnimated }],
          opacity: opacity,
        }}
      >
        <BrandName>{shoesInfo.brandName}</BrandName>
        <ShoesName>{shoesInfo.shoesName}</ShoesName>
        <Price>R$ {shoesInfo.price}</Price>
        {React.createElement(shoesInfo.image, { width: 350, height: 350 })}
      </AnimatedView>
    </TouchableOpacity>
  );
};

export { AnimatedShoesCard };
