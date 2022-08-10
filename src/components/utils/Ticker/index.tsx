
import { Container } from './styles';

interface TickerProps {
  ticker: string;
}

export function Ticker({ ticker }: TickerProps) {
  return (
    <Container>
      {ticker}
    </Container>
  );
}
