import styled from 'styled-components/native';
import { fontFamily } from '@fonts';

const BrandName = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.regular};
  color: white;
`;

const ShoesName = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.bold};
  color: blue;
`;

const Price = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.regular};
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

export { BrandName, ShoesName, Price, CardContainer };
