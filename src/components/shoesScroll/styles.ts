import styled from 'styled-components/native';

interface SpacerViewProps {
  width?: number;
}

const SpacerView = styled.View<SpacerViewProps>`
  width: ${(props) => props.width}px;
`;

export { SpacerView };
