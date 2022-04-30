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
`

export const NavigationLogoContainer = styled.View`
  width: 56px;
  height: 56px;
  background-color: #ecf0f2;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const NavigationLogo = styled.Image`
  
`;
