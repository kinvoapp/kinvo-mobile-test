import React, {useState, useEffect} from 'react';
import {View, FlatList, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Itemlist from './itemslist';

export default function(){

    const [text, setText] = useState('')     /* input do filtro*/
    const [list, setList] = useState('')    /* lista original */
    const [items, setItems] = useState('') /* lista filtrada */

    useEffect(()=>{
        getData()
    },[])

    function getData(){
        fetch('https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io/getProducts')
        .then(res=>res.json())
        .then(res=>{
            setList(res.data)
            setItems(res.data)
        })
    }

    return (

        <View>
               
            {/* Input de pesquisa */}
            <View style={styles.textbox}>
                <Image
                style={styles.imagesmagnifier}
                source={require('./symbols/magnifier/drawable-xhdpi/Caminho2489.png')}/>
                <TextInput
                style={styles.text}
                onChangeText={(text)=>SearchFilterFunction(text)}
                value={text}
                />
            </View>

            {/* Listagem */}
            <FlatList style={styles.containerlist}
            data={list}
            keyExtractor={item=>item.portfolioProductId.toString()}
            renderItem={<Itemlist/>}
            ListFooterComponent={<View  style={{paddingBottom:150}}/>}
            enableEmptySections={true}
            />

        </View>
    )

    /* Função de filtragem */
    function SearchFilterFunction(text){
        const filterList = items.filter((item)=>{
            const itemFilter = item.productName ? item.productName.toUpperCase() : "".toUpperCase();
            const newText = text.toUpperCase();
            return itemFilter.indexOf(newText) > -1;
        });
        setList(filterList)
        setText(text)
    }
}