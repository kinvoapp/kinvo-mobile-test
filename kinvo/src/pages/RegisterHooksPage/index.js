import React from 'react'
import Presentational from "./presentational";


export default  function Registers(props) {

const  cardItems = [{
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

function onPressCloseButton()  {
    const {navigation} = props
    return navigation.goBack()
}
    return  React.createElement(Presentational, {
        cardItems,            
        onPressCloseButton
    });
}

