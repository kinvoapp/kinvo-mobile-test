import styled from 'styled-components/native';
import Colors from '../../../resources/colors';

interface ICardStyle {
  closed?: boolean;
}
interface Ivalue extends ICardStyle {
  color: string;
}
export const Card = styled.View<ICardStyle>`
  width: 100%;
  padding: 16px 20px 21px;
  background: ${(p: ICardStyle) =>
    p.closed ? 'rgba(255, 255, 255, 0.4)' : '#fff'};
  border-radius: 10px;
  border: 1px solid ${Colors.gray02};
  display: flex;
`;

export const ContentBetween = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const space = {marginBottom: 15};

export const Title = styled.Text<ICardStyle>`
  width: 200px;
  font-size: 16px;
  color: ${Colors.gray01};
  font-family: 'Montserrat';
  font-weight: bold;
  opacity: ${(p: ICardStyle) => (p.closed ? 0.5 : 1)};
`;

export const Subtitle = styled.Text<ICardStyle>`
  font-size: 12px;
  color: ${Colors.gray01};
  font-family: 'Montserrat';
  font-weight: 500;
  opacity: ${(p: ICardStyle) => (p.closed ? 0.5 : 1)};
`;
export const Label = styled.Text<ICardStyle>`
  font-size: 10px;
  color: ${Colors.gray01};
  font-family: 'Montserrat';
  font-weight: 500;
  opacity: ${(p: ICardStyle) => (p.closed ? 0.5 : 1)};
`;

export const Value = styled.Text<Ivalue>`
  font-size: 12px;
  color: ${(p: Ivalue) => p.color};
  font-family: 'Montserrat';
  font-weight: 600;
  opacity: ${(p: Ivalue) => (p.closed ? 0.5 : 1)};
`;
