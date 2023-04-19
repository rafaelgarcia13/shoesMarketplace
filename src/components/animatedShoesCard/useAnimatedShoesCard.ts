import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

interface AnimatedShoesCardProps {
  index: number;
  cardWidth: number;
  scrollX: Animated.Value;
}

const useAnimatedShoesCard = (
  index: number,
  cardWidth: number,
  scrollX: Animated.Value,
) => {
  const scaleAnimated = useRef(new Animated.Value(1)).current;

  const startScaleAnimated = () => {
    Animated.sequence([
      Animated.timing(scaleAnimated, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimated, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const fiveCardsPositions = [
    (index - 2) * cardWidth, //previous cards
    (index - 2) * cardWidth + cardWidth / 2, //previous half width of actual card
    (index - 1) * cardWidth, //actual card
    (index - 1) * cardWidth + cardWidth / 2, //next half width of actual card
    index * cardWidth, //next card
  ];

  const translateY = scrollX.interpolate({
    inputRange: [fiveCardsPositions[0], fiveCardsPositions[2], fiveCardsPositions[4]],
    outputRange: [0, -50, 0],
  });

  const rotateY = scrollX.interpolate({
    inputRange: fiveCardsPositions,
    outputRange: ['0deg', '30deg', '0deg', '30deg', '0deg'],
  });

  const opacity = scrollX.interpolate({
    inputRange: [fiveCardsPositions[0], fiveCardsPositions[2], fiveCardsPositions[4]],
    outputRange: [0.6, 1, 0.6],
  });

  return { translateY, rotateY, opacity, scaleAnimated, startScaleAnimated };
};

export { useAnimatedShoesCard };
