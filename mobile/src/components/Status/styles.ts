import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

interface TextProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  height: 20px;
  padding: 5px 15px;

  border-radius: 10px;

  background: ${props => props.color};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: 'Montserrat-Medium';
  font-size: 10px;

  color: ${props => props.color};
`;
