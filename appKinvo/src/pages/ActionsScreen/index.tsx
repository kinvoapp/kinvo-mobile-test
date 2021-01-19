import React, {useEffect, useState} from "react";
import {Container} from './styles';
import Header from '../../components/Header';
import { Text, View} from 'react-native';
import CardActions from '../../components/CardActions';

const ActionsScreen: React.FC = () => {

  const [allHome, setAllHome] = useState([]);  ///  o segredo são as chaves
  useEffect(() => {

    const getItens = async () => {
      const res = await fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks');
      const json = await res.json()
      const todoshome = json;
      setAllHome(todoshome.data); 
    }
    getItens();
  }, [])

 
  return (
    <Container>
      <Header name="Ações" />


      <CardActions id={1} name='Magazine Luiza' ticker='MGLU3' minimumValue={100} profitability={27.05} />
        




      {/* <View>
        {allHome.map(({id, name}) => {
          return (
            <View key={id}>
              <Text>{name}</Text>
            </View>
          )
        })}
      </View> */}

    </Container>
  );
};
export default ActionsScreen;
