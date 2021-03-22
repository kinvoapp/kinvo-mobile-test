import styled from 'styled-components/native';
import ArrowSVG from '../../assets/arrow.svg';

interface ArrowSVGProps {
  isIncrease: Boolean;
}

export const Arrow = styled(ArrowSVG)<ArrowSVGProps>`
  height: 8.25px;
  width: 8.25px;
  transform: ${props => (props.isIncrease ? null : 'rotate(180deg)')};
  color: ${props => (props.isIncrease ? '#AED335' : '#E85D1F')};
`;
