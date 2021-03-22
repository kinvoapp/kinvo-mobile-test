import styled from 'styled-components/native';
import ArrowSVG from '../../assets/arrow.svg';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 145px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px;
  border-color: #dae0e3;
  padding-bottom: 22px;
  padding-top: 16px;
`;

export const StockTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 89%;
  height: 47%;
  border-bottom-width: 1px;
  border-color: #dae0e3;
`;

export const Title = styled.View`
  display: flex;
  flex-direction: column;
`;

export const StockName = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: #627179;
`;

export const StockTicker = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

export const StockInfo = styled.View`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 53%;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InfoText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-Medium';
  color: #627179;
`;

export const ValueData = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

interface RentabilityDataProps {
  increase: boolean;
}

export const RentabilityDataContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RentabilityData = styled.Text<RentabilityDataProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  margin-left: 5px;
  color: ${props => (props.increase ? '#AED335' : '#E85D1F')};
`;

interface ArrowSVGProps {
  isIncrease: boolean;
}

export const Arrow = styled(ArrowSVG)<ArrowSVGProps>`
  height: 8.25px;
  width: 8.25px;
  transform: ${props => (props.isIncrease ? null : 'rotate(180deg)')};
  color: ${props => (props.isIncrease ? '#AED335' : '#E85D1F')};
`;
