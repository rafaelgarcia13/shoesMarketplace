import styled from 'styled-components/native';
import { fontFamily } from '@fonts';
import { Animated } from 'react-native';

const BrandName = styled.Text`
  font-size: 36px;
  font-family: ${fontFamily.bold};
  color: white;
`;

const ShoesName = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.bold};
  color: white;
`;

const Price = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.light};
  color: white;
`;

interface CardContainerProps {
  width: number;
}

const CardContainer = styled.View<CardContainerProps>`
  height: 360px;
  width: ${(props) => props.width}px;
  background-color: red;
  border-radius: 40px;
  padding: 16px;
`;

interface AnimatedViewProps {
  backgroundColor: string;
}

const AnimatedView = styled(Animated.View)<AnimatedViewProps>`
  border-radius: 40px;
  padding: 24px;
  margin-horizontal: 16px;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

const TextWrapper = styled.View`
  align-items: flex-start;
  width: 100%;
`;

export { BrandName, ShoesName, Price, CardContainer, AnimatedView, TextWrapper };
