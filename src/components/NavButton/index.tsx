import { Container, Description, Title, Infos, Icon } from './styles';



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
      <Icon>
        {icon}
      </Icon>
      <Infos>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Infos>
    </Container>
  );
}
