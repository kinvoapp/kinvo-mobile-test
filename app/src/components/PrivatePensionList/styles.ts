import styled from 'styled-components/native';

interface IButtonSelectProps {
  selected: boolean;
}

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  padding: 0 40px;
`;

export const FiltersButton= styled.TouchableOpacity<IButtonSelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 93px;
  height: 32px;
  background-color: ${(props => props.selected ? '#6f4dbf' : '#fff')};
  border-radius: 10px;
`;

export const FiltersButtonText= styled.Text<IButtonSelectProps>`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: ${(props => props.selected ? '#fff' : '#627179')};
`;

export const SeparatorView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer= styled.View`
  width: 320px;
  padding: 5px 17px;
  min-height: 185px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid #dae0e3;
`;

export const CardFooter= styled.View`
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
`;

export const ViewTax= styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  justify-content: space-between;
`;

export const TaxText= styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: #627179;
`;

export const TaxValue= styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

export const ViewRedemptionTerm= styled.View`
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RedemptionTermText = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: #627179;
`;

export const RedemptionTerm = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

export const MessageView = styled.View`
  padding: 0 45px;
  justify-content: center;
  align-items: center;
  min-height: 35px;
`;
