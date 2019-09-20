import Presentational from "./presentational";
import React, { Component } from 'react'

export default class Registers extends Component {


    cardItems = [{
        title: 'Aplicação',
        color: '#A4D36D',
        message: 'Cadastre uma nova aplicação em um produtos da carteira.'       
      },
      {
        title: 'Retirada',
        color: '#FF9B52',   
        message: 'Cadastre uma nova retira em um produtos da carteira.' 
    },
    {
        title: 'Novo Produto',
        color: '#36C4D6',   
        message: 'Cadastre um novo produtos de qualquer instituição.' 
    },
    {
        title: 'Conectar',
        color: '#A138C7',   
        message: 'Importe seus produtos de uma instituição parceira.'  
    },   

]; 

onPressCloseButton = () => {
    const {navigation} = this.props
    return navigation.goBack()
}


    render() {

        const {cardItems,onPressCloseButton} = this
       
        return React.createElement(Presentational, {
            cardItems,            
            onPressCloseButton
        });
    }
}
