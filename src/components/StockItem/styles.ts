import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px;
  border-color: #dae0e3;
  padding-top: 15px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 39%;
  border-bottom-width: 1px;
  border-color: #dae0e3;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: #627179;
  width: 85%;
`;

export const Type = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
  margin-bottom: 16px;
`;

export const Status = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: -7px;
`;

export const StatusText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-Medium';
  color: #fff;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 63%;
`;

export const InfoItem = styled.View`
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

export const Value = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
  margin-right: 5px;
`;
