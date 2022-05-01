import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ecf0f2;
  width: 100%;
`;

export const InnerContainer = styled.View`
  flex: 1;
  background-color: #ecf0f2;
  width: 100%;
`;

export const loadingContainer = styled.View`
  flex: 1;
  background-color: #ecf0f2;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardWraper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 10px;
`;

export const FilterWraper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;

interface FilterTextProps {
  isPressed: boolean;
}

export const FilterText = styled.Text<FilterTextProps>`
  color: ${({isPressed}) => (isPressed ? '#FFFFFF' : '#627179')};
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
`;

interface PressableFilterProps {
  isPressed: boolean;
}

export const PressableFilter = styled.Pressable<PressableFilterProps>`
  background-color: ${({isPressed}) => (isPressed ? '#6F4DBF' : '#FFFFFF')};
  height: 32px;
  width: 93px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const DividerBorder = styled.View`
  border: solid #dae0e3 0.5px;
  width: 90%;
  border-radius: 1px;
  opacity: 0.7;
  margin-bottom: 10px;
`;

export const CenterDivider = styled.View`
  align-items: center;
`;
