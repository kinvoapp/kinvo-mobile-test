import styled from 'styled-components/native';
import ArrowSVG from '../../assets/arrow.svg';

interface StatusProps {
  isClosed: boolean;
}

export const Container = styled.View<StatusProps>`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 185px;
  background-color: ${props => (props.isClosed ? '#F7F8F8' : '#FFF')};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px;
  border-color: #dae0e3;
  padding-top: 15px;
`;

export const FundTitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 37%;
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

export const FundName = styled.Text<StatusProps>`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: ${props => (props.isClosed ? 'rgba(98,113,121,0.5)' : '#627179')};
`;

export const FundType = styled.Text<StatusProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: ${props => (props.isClosed ? 'rgba(98,113,121,0.5)' : '#627179')};

  margin-bottom: 16px;
`;

export const FundStatusContainer = styled.View`
  height: 20px;
  width: 56px;
  border-radius: 25px;
  background-color: #40c5d6;
  align-items: center;
  justify-content: center;
  margin-right: -7px;
`;

export const FundStatusText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-Medium';
  color: #fff;
`;

export const FundInfo = styled.View`
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

export const InfoText = styled.Text<StatusProps>`
  font-size: 10px;
  font-family: 'Montserrat-Medium';
  color: ${props => (props.isClosed ? 'rgba(98,113,121,0.5)' : '#627179')};
`;

export const ValueData = styled.Text<StatusProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: ${props => (props.isClosed ? 'rgba(98,113,121,0.5)' : '#627179')};

  margin-right: 5px;
`;

interface RentabilityDataProps {
  isIncrease: boolean;
  isClosed: boolean;
}

export const ProfitabilityDataContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

export const ProfitabilityData = styled.Text<RentabilityDataProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  margin-left: 5px;
  color: ${props => {
    if (!props.isClosed) {
      return props.isIncrease ? '#AED335' : '#E85D1F';
    } else {
      return 'rgba(98, 113, 121, 0.5)';
    }
  }};
`;

interface ArrowSVGProps {
  isIncrease: Boolean;
  isClosed: Boolean;
}

export const FundsProfitabilityArrow = styled(ArrowSVG)<ArrowSVGProps>`
  height: 8.25px;
  width: 8.25px;
  transform: ${props => (props.isIncrease ? null : 'rotate(180deg)')};
  color: ${props => {
    if (!props.isClosed) {
      return props.isIncrease ? '#AED335' : '#E85D1F';
    } else {
      return 'rgba(98, 113, 121, 0.5)';
    }
  }};
`;
