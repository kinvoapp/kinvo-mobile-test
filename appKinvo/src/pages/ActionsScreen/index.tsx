import React, {useEffect, useState} from "react";
import {Container} from './styles';
import Header from '../../components/Header';
import CardActions from '../../components/CardActions';
import {  ScrollView} from "react-native";

const ActionsScreen: React.FC = () => {

  const [allItens, setAllItens] = useState([]); 

  useEffect(() => {
    const getItens = async () => {
          const res = await fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks');
          const json = await res.json()
          const todosItens = json;

          setAllItens(todosItens.data); 

      }
      getItens();
    
    }, [])
    
 
const  itensOrdenados =  [].concat(allItens).sort((a, b) => a.name > b.name ? 1 : -1);
      return (
        <Container>
    
            <Header name="Ações" />
    
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        
              {itensOrdenados.map(({id, name, ticker, minimumValue, profitability}) => {
                return (
                        <CardActions key={id}
                          id={id} 
                          name={name} 
                          ticker={ticker} 
                          minimumValue={minimumValue} 
                          profitability={profitability} />
                            )
                          })}
    
              </ScrollView>
    
        </Container>
      );
  

};
export default ActionsScreen;
