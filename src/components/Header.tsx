import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';



export default function Header() {


  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image 
          source={require('../assets/backButton.png')} 
      />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.title}>Carteira</Text>
      </TouchableOpacity>
      <View style={styles.tab}>
        <TouchableOpacity>
          <Text style={styles.title}>Produtos</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity> 
        <Text style={styles.title}>Extrato</Text>
      </TouchableOpacity>   
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 20,
    backgroundColor:'#FFF',
    paddingTop: 40,
    

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
  },

  tab: {
    backgroundColor: '#F5F8FA',
    marginBottom: 0,
    height: '100%',
    width: 110,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 10,
    alignItems: 'center',
  }
  
})