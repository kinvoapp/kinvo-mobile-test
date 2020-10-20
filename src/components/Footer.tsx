import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <View style={styles.footerIcons}><Image source={require('../assets/abstractIcon.png')}/><Text style={styles.footerText}>Resumo</Text></View>
        <View style={styles.footerIcons}><Image source={require('../assets/walletIcon.png')}/><Text style={styles.footerText}>Carteira</Text></View>
        <View style={styles.footerIcons}><Image source={require('../assets/addButton.png')}/></View>
        <View style={styles.footerIcons}><Image source={require('../assets/premiumIcon.png')}/><Text style={styles.footerText}>Premium</Text></View>
        <View style={styles.footerIcons}><Image source={require('../assets/profileIcon.png')}/><Text style={styles.footerText}>Conta</Text></View>
      </View>
  )
}

const styles = StyleSheet.create({

  footer: {
    position: 'relative',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#CCCFD1'
  },

  footerIcons: {
    alignItems: 'center',
    
  },

  footerText: {
    fontSize: 12,
  },
})