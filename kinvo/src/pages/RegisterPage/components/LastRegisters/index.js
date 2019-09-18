import Presentational from "./presentational";
import React, { Component } from 'react'





export default class LastRegisters extends Component {


 dataApi = [{
        key: '1',
        color: '#A138C7',
        message: 'Conectar com o Tesouro Direto.'       
      },
      {
        key: '2',
        color: '#A4D36D',   
        message: 'Aplicação Previdência Bradesco.' 
    },
    {
        key: '3',
        color: '#A4D36D',   
        message: 'Aplicação Fundo Multimercado All Star...' 
    }, 

]; 


    render() {

        const {dataApi} = this

        return React.createElement(Presentational, {
            dataApi
        });
    }
}
