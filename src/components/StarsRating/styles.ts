import styled from 'styled-components/native';
import StartOutlineSVG from '../../assets/staroutline.svg';
import StartSVG from '../../assets/star.svg';
interface StatusProps {
  isClosed: Boolean;
}

export const ContainerRating = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Star = styled(StartSVG)<StatusProps>`
  height: 16px;
  width: 16px;
  color: ${props => (props.isClosed ? 'rgba(98, 113, 121, 0.5)' : '#F8C22E')};
`;

export const StarOutline = styled(StartOutlineSVG)<StatusProps>`
  height: 16px;
  width: 16px;
  color: ${props => (props.isClosed ? 'rgba(98, 113, 121, 0.5)' : '#F8C22E')};
`;
