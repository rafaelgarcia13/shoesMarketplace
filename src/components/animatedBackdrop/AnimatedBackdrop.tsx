import React from 'react';
import { Animated, View, useWindowDimensions, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import { shoesData } from '../../shoesData';

interface AnimatedBackdropProps {
  scrollX: Animated.Value;
}

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const AnimatedBackdrop: React.FC<AnimatedBackdropProps> = ({ scrollX }) => {
  const { width, height } = useWindowDimensions();
  const SHOES_CARD_WIDTH = width * 0.72;
  return (
    <View style={{ position: 'absolute', width, height }}>
      <FlatList
        data={shoesData}
        removeClippedSubviews={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ width, height }}
        renderItem={({ item, index }) => {
          if (item.fakerShoes) return null;

          const inputRange = [
            (index - 2) * SHOES_CARD_WIDTH, //previous cards
            (index - 1) * SHOES_CARD_WIDTH, //actual card
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
            // extrapolate:'clamp'
          });
          return (
            <MaskedView
              style={{
                position: 'absolute',
              }}
              maskElement={<></>}
            >
              <AnimatedGradient
                colors={[item.backgroundColor, '#FFFFFF']}
                style={{
                  position: 'absolute',
                  width,
                  height,
                  transform: [{ translateX }],
                }}
              />
            </MaskedView>
          );
        }}
      />
    </View>
  );
};

export { AnimatedBackdrop };
{
  /* <AnimatedGradient
                  colors={[item.backgroundColor, '#ebebeb']}
                  style={{
                    width,
                    height,
                    //transform: [{ translateX }],
                  }}
                /> */
}

{
  /* <ScrollView>
        {shoesData.map((item, index) => {
          const inputRange = [
            (index - 2) * SHOES_CARD_WIDTH, //previous cards
            (index - 1) * SHOES_CARD_WIDTH, //actual card
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
          });
          return (
            !item.fakerShoes && (
              <View
                key={item.id}
                style={{ position: 'absolute', backgroundColor: item.backgroundColor }}
              />
            )
          );
        })}
      </ScrollView> */
}
