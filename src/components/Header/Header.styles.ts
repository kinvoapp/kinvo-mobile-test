import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100px;

  padding: 0 ${({ theme }) => theme.size.padding.default}px;

  background-color: ${({ theme }) => theme.colors.app.white};
`;

export const ButtonGoBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})`
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;

  margin-right: 10px;

  border-radius: 22px;

  background-color: transparent;
`;
