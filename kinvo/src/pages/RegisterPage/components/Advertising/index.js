import Presentational from "./presentational";
import { Animated,Easing } from "react-native";

import React, { Component } from "react";

export default class Advertising extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isVisible: true,
      fadeValue:new Animated.Value(1),
      swipeBackAdvertising: new Animated.Value(0),
    };
  }

  dataApi = {
    title: "Agora você pode importar seus produtos do Itaú.",
    message: "Todos os seus produtos Itaú conectados automaticamente no Kinvo.",
    colorTitle: "#FF9B52"
  };

  closeAdvertising = async() => {
      await this.closeAnimation()    
  };

  closeAnimation = async()=> {  

    await Animated.parallel([
        Animated.timing(this.state.fadeValue, {
            toValue: 0,
            duration: 600,
          }),
        Animated.timing(this.state.swipeBackAdvertising, {
          toValue: 45,
          duration: 600,
        }),      
      ]).start(()=> this.setNotVisible());     
    
  }

  setNotVisible = ()=>{
    this.setState(prevState => ({
        ...prevState,
        isVisible: false
      }))
  }

  render() {
    const { title, message, colorTitle } = this.dataApi;
    const { closeAdvertising } = this;
    const { isVisible } = this.state;
   

    if (isVisible)
      return React.createElement(Presentational, {
        ...this.state,
        title,
        message,
        colorTitle,
        closeAdvertising
      });

    return null;
  }
}
