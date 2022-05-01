import styled from 'styled-components/native';
import {ArrowIcon as ArrowIconComponent} from '../Icons/ArrowIcon';

interface ContainerProps {
  status: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  min-height: 185px;
  max-height: 235px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 12px;
  margin-bottom: 20px;
  opacity: ${({status}) => (status === 2 ? '0.5' : '1')};
`;

export const CardTitleWraper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 45%;
`;

export const NameContainer = styled.View`
  max-width: 70%;
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
  align-items: center;
  height: 55%;
`;

export const InfoNameContainer = styled.View`
  justify-content: space-between;
`;

export const ValuesContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  align-items: flex-end;
  padding-right: 4px;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #627179;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const SubTitleText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #627179;
  font-size: 12px;
  margin-bottom: 15px;
`;

interface RentabilityTextProps {
  color: string;
}

export const RentabilityText = styled.Text<RentabilityTextProps>`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${({color}) => color}; ;
`;

export const InfoText = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #627179;
  font-size: 10px;
  margin-bottom: 15px;
`;

export const DividerBorder = styled.View`
  border: solid #dae0e3 0.5px;
  border-radius: 1px;
  opacity: 0.7;
  margin-bottom: 10px;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const NewTagWraper = styled.View`
  background-color: #40c5d6;
  width: 56px;
  height: 20px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const NewTagText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #ffffff;
`;
export const ClosedTagWraper = styled.View`
  background-color: #627179;
  width: 75px;
  height: 20px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const ClosedTagText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #ffffff;
`;
