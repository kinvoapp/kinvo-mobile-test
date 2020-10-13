import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';



export default function renderItem({item}){
    
    return ( 

        //Gera os elementos da lista
        <TouchableOpacity style={itemStyle} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
                        
            <View style={styles.textlist}data={list}>

            <Text style={{fontSize:10,
                color:colort,
                fontWeight: 'bold',
                paddingStart: 20,
                paddingTop: 18
                }}>{item.financialInstitutionName}
            </Text>

            <View style={{flexDirection:'row', paddingStart: 22.5}}>
                <View style={{
                    paddingStart: 5,
                    backgroundColor: colort,
                    borderRadius: 100,
                }}/>
                <Text style={styles.listletter}>{item.productName}</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={{paddingStart: 20, fontSize:10, color:'#707B81'}}>
                    Saldo Atual
                </Text>
                <Text style={{paddingEnd: 20, fontSize:10, color:'#707B81'}}>
                    Rentabilidade
                </Text>
            </View>    

            <View style={styles.textlistinf}>
                
                <Text style={{
                    fontSize:20,
                    color:colort,
                    fontWeight: 'bold',
                    paddingStart: 20
                    }}>R${item.equity}
                </Text>
            
                <Text style={{
                    fontSize:20,
                    color:colort,
                    fontWeight: 'bold',
                    paddingEnd: 20
                    }}>{item.profitability}%
                </Text>

            </View>

            </View>
        </TouchableOpacity>

    )
}

// insere a cor a depender do tipo de produto
const color = getColor()
const itemStyle = {colort:color}

function getColor(){

    if(item.productTypeId===1)
    return '#008DCB'

    else if(item.productTypeId===2)
    return '#D5A82C'

    else if(item.productTypeId===3)
    return '#94E5D2'

    else if(item.productTypeId===4)
    return '#86B2DE'

    else if(item.productTypeId===5)
    return '#5AAAD5'

    else if(item.productTypeId===6)
    return '#38BFA0'

    else if(item.productTypeId===7)
    return '#3E71B9'

    else if(item.productTypeId===8)
    return '#4C309B'

    else if(item.productTypeId===9)
    return '#86B2DE'

    else if(item.productTypeId===10)
    return '#B9B42C'

    else if(item.productTypeId===11)
    return '#4141D5'

    else if(item.productTypeId===12)
    return '#9390E5'

}