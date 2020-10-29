import React, {  useState, useEffect } from 'react';
import styles from './styles';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';
import idColors from './idColors';
import { SearchBar } from 'react-native-elements';

function renderitem({ item }) 
{
    //Função para tirar as cores
    const idColor = StyleSheet.create({
        color:{color: idColors(item.productTypeId)}
    });
    
    //Parte do Saldo e Numeros
    function BottomCard( {name, number, style} )
    {
    return (
        <View>
        <Text style={style.bottomCardUpperText}>{name}</Text>
        <Text style={
            StyleSheet.compose(
            style.bottomCardLowerText,
            idColor.color
            )
            }>{number}</Text>
        </View>
    )
    }

    //Texto do Produto
    function InsideProductBox({text, style, notch})
    {
        //sobre como o layout está desposto, nada de layout de verdade
        return(
        <View style={{flex:1, flexDirection: 'row'}}>
            <View style={notch}/>
            <Text style={style.insideText}>{text}</Text>
        </View>
        );
    }

    return (
      <SafeAreaView style={styles.listItem}>
        <Text style={
          StyleSheet.compose(
            styles.nomeInst,
            idColor.color,
          )
          }>
          {item.financialInstitutionName}
        </Text>
        <InsideProductBox 
            text={item.productName}
            style={styles}
            notch={{
            borderWidth: 2, 
            borderRadius:4, 
            marginRight:4, 
            borderColor: idColors(item.productTypeId)
            }}
        />
        <View style={styles.row}>
          <BottomCard 
            name={'SALDO'}
            number={
              'R$' + 
              item.equity.toLocaleString('pt-br', {minimumFractionDigits: 2})
            }
            style={styles}
          /> 
          <View style={{marginLeft:'auto'}}>
          <BottomCard 
            name={'Rentabilidade'}
            number={item.profitability + '%'}
            style={styles} 
            /> 
            </View>
        </View>
     </SafeAreaView>
    )
  }

export default function Lista({fetchURL}){
    const [data, setData] = useState(() => []);
    const [loading, setIsLoading] = useState(() => false);
    const [query, setSearch] = useState(() => '');
    const [fullData, setFullData] = useState(() => []);

    useEffect(() => {
      setIsLoading(true);
      fetch(fetchURL)
        .then(response => response.json())
        .then(results => {
          setData(results.data);
          setIsLoading(false);
          setFullData(results.data);
        })
    }, []);

    const contains = ({ productName, financialInstitutionName }, query) => {
      if(productName.includes(query) || financialInstitutionName.includes(query))
         {
           return true;
         }
      return false;
    }

    const handleSearch = (text) => {
      const filteredData = fullData.filter(product => {
        return (contains(product, text));
      });
      setData(filteredData);
      setSearch(text);
    }

    const renderHeader = () => {    
      return (      
        <SearchBar        
          placeholder="Type Here..."
          lightTheme={true}               
          onChangeText={e => handleSearch(e)}
          value={query}
          autoCorrect={false}      
        />    
      );  
    };

    if(loading){
      return (<View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>);
    }

    return (
      <SafeAreaView>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={data}
          renderItem={renderitem}
          keyExtractor={item => item.portfolioProductId}
          ListHeaderComponent={renderHeader}
        />
        </SafeAreaView>  
      );
}
  