import styled from 'styled-components/native';
import {ArrowIcon as ArrowIconComponent} from '../Icons/ArrowIcon';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 145px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 14px;
  margin-bottom: 20px;
  align-self: stretch;
`;

export const CardTitleWraper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
`;

export const LikeIcon = styled.Pressable`
  width: 24px;
`;

export const ProfitabilityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
`;

interface ArrowIconProps {
  isUp: boolean;
}

export const ArrowIcon = styled(ArrowIconComponent)<ArrowIconProps>`
  transform: ${({isUp}) => (isUp ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

export const CardInfoWraper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
`;

export const InfoNameContainer = styled.View`
  justify-content: space-between;
  padding-bottom: 21px;
`;

export const ValuesContainer = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #627179;
  font-size: 16px;
`;

export const SubTitleText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #627179;
  font-size: 12px;
`;

interface RentabilityTextProps {
  isPositive: boolean;
}

export const RentabilityText = styled.Text<RentabilityTextProps>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${({isPositive}) => (isPositive ? '#AED335' : '#E85D1F')}; ;
`;

export const InfoText = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 10px;
`;

export const DividerBorder = styled.View`
  border: solid #dae0e3 0.5px;
  border-radius: 1px;
  opacity: 0.7;
  margin-bottom: 10px;
`;
