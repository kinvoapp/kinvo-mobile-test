import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const Header = styled.View`
  margin-bottom: 15px;
`;

// const TitleAttrs = () => ({
//   numberOfLines: 3,
// });

// const TEXT_WITH = Dimensions.get('window').width - 16 * 4;

// export const Title = styled(Heading2).attrs(TitleAttrs)`
//   width: ${TEXT_WITH / 1.3}px;
// `;

export const InfoContainer = styled.View`
  margin-top: 10px;
`;
