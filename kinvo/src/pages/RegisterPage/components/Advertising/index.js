import Presentational from "./presentational";
import React, { Component } from 'react'





export default class Advertising extends Component {


    dataApi = {
      title: 'Agora você pode importar seus produtos do Itaú.',
      message:'Todos os seus produtos Itaú conectados automaticamente no Kinvo.',
      colorTitle: '#FF9B52'
    }; 


    render() {

        const {title, message,colorTitle} = this.dataApi
        return React.createElement(Presentational, {
            title,
            message,
            colorTitle
        });
    }
}
