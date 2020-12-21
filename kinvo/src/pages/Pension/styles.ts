import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FilterContent = styled.View`
  padding-top: 20px;
  justify-content: space-between;
  width: 90%;
  margin-bottom: -8px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #dae0e3;
  opacity: 0.5;
  margin-top: 15px;
  margin-bottom: 20px;
`;
