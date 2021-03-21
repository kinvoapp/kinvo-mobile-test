import styled from 'styled-components/native';
import GreenArrowSVG from '../../assets/greenarrow.svg';
import RedArrowSVG from '../../assets/redarrow.svg';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 218px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px;
  border-color: #dae0e3;
  padding-top: 15px;
`;

export const PensionTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 31%;
  border-bottom-width: 1px;
  border-color: #dae0e3;
`;

export const Title = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PensionName = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: #627179;
`;

export const PensionType = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
  margin-bottom: 16px;
`;

export const PensionStatusContainer = styled.View`
  height: 20px;
  width: 56px;
  border-radius: 25px;
  background-color: #40c5d6;
  align-items: center;
  justify-content: center;
  margin-right: -7px;
`;

export const PensionStatusText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-Medium';
  color: #fff;
`;

export const PensionInfo = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 63%;
  margin-bottom: 22px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
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
  margin-right: 5px;
`;

interface RentabilityDataProps {
  increase: boolean;
}

export const RentabilityDataContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

export const RentabilityData = styled.Text<RentabilityDataProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  margin-left: 5px;
  color: ${props => (props.increase ? '#AED335' : '#E85D1F')};
`;

export const RedArrow = styled(RedArrowSVG)`
  height: 8.25px;
  width: 8.25px;
  transform: rotate(180deg);
`;

export const GreenArrow = styled(GreenArrowSVG)`
  height: 8.25px;
  width: 8.25px;
`;
