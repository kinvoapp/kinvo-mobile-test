import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import abstractIcon from '../assets/abstractIcon.png';
import addButton from '../assets/addButton.png';
import premiumIcon from '../assets/premiumIcon.png';
import profileIcon from '../assets/profileIcon.png';
import walletIcon from '../assets/walletIcon.png';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <View style={styles.footerIcons}><Image source={abstractIcon}/><Text style={styles.footerText}>Resumo</Text></View>
        <View style={styles.footerIcons}><Image source={walletIcon}/><Text style={styles.footerText}>Carteira</Text></View>
        <View style={styles.footerIcons}><Image source={addButton}/></View>
        <View style={styles.footerIcons}><Image source={premiumIcon}/><Text style={styles.footerText}>Premium</Text></View>
        <View style={styles.footerIcons}><Image source={profileIcon}/><Text style={styles.footerText}>Conta</Text></View>
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