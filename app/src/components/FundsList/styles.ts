import styled from 'styled-components/native';


interface ICardProps {
  status: number;
}
export const CardContainer = styled.View<ICardProps>`
  width: 320px;
  padding: 5px 17px;
  min-height: 185px;
  background-color: ${(props => props.status === 2 ? '#f7f8f8' : '#fff')};
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid #dae0e3;
`;

export const CardHeader = styled.View`
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
  flex-direction: row;
`;

export const Status = styled.View<ICardProps>`
  align-items: center;
  justify-content: center;
  width: ${props => props.status === 1 ? 56 : 70}px;
  height: 20px;
  background-color: ${props => props.status === 1 ? '#36C4D6' : '#818181'};
  border-radius: 10px;
`;

export const StatusText = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #fff;
  font-size: 10px;
`;

export const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
`;
