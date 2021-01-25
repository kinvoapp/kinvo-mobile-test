import styled from 'styled-components/native';

interface LabelTextProps {
  color: string;
  opacity: number;
}

interface ValueTextProps {
  color: string;
  opacity: number;
}

export const Container = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const LabelText = styled.Text<LabelTextProps>`
  font-family: 'Montserrat-Medium';
  font-size: 10px;

  color: ${props => props.color};
  opacity: ${props => props.opacity};
`;

export const ValueContainer = styled.View`
  flex-direction: row;
`;

export const ValueText = styled.Text<ValueTextProps>`
  margin-left: 5px;

  font-family: 'Montserrat-SemiBold';
  font-size: 12px;

  color: ${props => props.color};
  opacity: ${props => props.opacity};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
`;
