
import { Text } from 'react-native';
import { Container, Description, Title, Infos } from './styles';



interface NavButtonProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  handleRedirect(): any;
}

export function NavButton({
  title,
  text,
  icon,
  handleRedirect,
}: NavButtonProps) {
  return (
    <Container onPress={handleRedirect}>
      {icon}
      <Infos>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Infos>
    </Container>
  );
}
