import Presentational from "./presentational";
import React, { Component } from 'react'

export default class Registers extends Component {


    cardItens = [{
        key: 'Aplicação',
        color: '#A4D36D',
        message: 'Cadastre uma nova aplicação em um produtos da carteira.'       
      },
      {
        key: 'Retirada',
        color: '#FF9B52',   
        message: 'Cadastre uma nova retira em um produtos da carteira.' 
    },
    {
        key: 'Novo Produto',
        color: '#36C4D6',   
        message: 'Cadastre um novo produtos de qualquer instituição.' 
    },
    {
        key: 'Conectar',
        color: '#A138C7',   
        message: 'Importe seus produtos de uma instituição parceira.'  
    },   

]; 


    render() {

        const {cardItens} = this
        return React.createElement(Presentational, {
            cardItens
        });
    }
}
