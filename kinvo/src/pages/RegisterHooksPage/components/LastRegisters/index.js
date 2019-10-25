import React from 'react'
import Presentational from "./presentational";


export default  function LastRegisters(props){

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


return React.createElement(Presentational, {
    dataApi
});
}