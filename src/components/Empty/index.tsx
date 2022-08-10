
import { Container, Warn } from './styles';

export function Empty() {
  return (
    <Container>
      <Warn>Nenhum resultado foi encontrado para os filtros selecionados.</Warn>
    </Container>
  );
}
