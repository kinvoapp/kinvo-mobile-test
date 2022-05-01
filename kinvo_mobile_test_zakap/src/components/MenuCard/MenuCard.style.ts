import styled from 'styled-components/native';

export const NavigationPressable = styled.Pressable`
  width: 100%;
  height: 120px;
  border: 1px solid #dae0e3;
  border-radius: 10px;
  opacity: 1;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  justify-content: space-between;
`;

export const NavigationWraper = styled.View`
  flex-direction: row;
`;

export const NavigationLogoContainer = styled.View`
  width: 56px;
  height: 56px;
  background-color: #ecf0f2;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const MainText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: #6f4dbf;
`;

export const SubText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 10px;
  color: #627179;
`;

export const NewTagWraper = styled.View`
  background-color: #40c5d6;
  width: 56px;
  height: 20px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const NewTagText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #ffffff;
`;
