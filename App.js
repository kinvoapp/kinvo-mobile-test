import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, Alert, View, StatusBar} from 'react-native';
import styles from './src/styles';
import List from './src/bank';

export default function Kinvo() {
  return(
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='white' barStyle='dark-content'/>

    {/*Header*/}
    <View style={styles.containersup}>

    {/* Componente de símbolo da header*/}
    <TouchableOpacity style={styles.containerimages} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
      <Image
      style={styles.images}
      source={require('./src/symbols/arrow/drawable-xhdpi/Grupo4122.png')}/>
    </TouchableOpacity>

    {/* Componentes de texto da header*/}
    <TouchableOpacity style={styles.containertext} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
      <Text style={styles.text}>Carteira</Text>
    </TouchableOpacity>

    <View style={styles.containertext}>
      <TouchableOpacity style={styles.containertextprincipal}>
        <Text style={styles.text}>Produtos</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.containertext} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
      <Text style={styles.text}>Extrato</Text>
    </TouchableOpacity>

    </View>

    {/* Componentes de lista e pesquisa*/}
    <View style={{flex: 1}}>
      <List/>
    </View>

    {/*Footer*/}
    <View style={styles.containerinf}>

    <TouchableOpacity style={styles.containersymbols} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
        <Image
          style={styles.symbols}
          source={require('./src/symbols/rungraphic/drawable-xhdpi/Grupo4108.png')}/>
        <Text style={styles.textsymbols}>Resumo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containersymbols}>
        <Image
          style={styles.symbols}
          source={require('./src/symbols/wallet/drawable-xhdpi/Grupo4103.png')}/>
        <Text style={styles.textsymbols}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containersymbols} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
        <Image
          style={styles.principalsymbol}
          source={require('./src/symbols/plus/drawable-xhdpi/Grupo4133.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containersymbols} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
        <Image
          style={styles.symbols}
          source={require('./src/symbols/premium/drawable-xhdpi/União228.png')}/>
        <Text style={styles.textsymbols}>Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containersymbols} onPress={()=>Alert.alert('Em breve','Produto em desenvolvimento.')}>
        <Image
          style={styles.symbols}
          source={require('./src/symbols/account/drawable-xhdpi/Grupo4101.png')}/>
        <Text style={styles.textsymbols}>Conta</Text>
      </TouchableOpacity>
      
      </View>
    
    </SafeAreaView>

  )
}