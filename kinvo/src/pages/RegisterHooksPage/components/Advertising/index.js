import React ,{useState}from 'react'
import Presentational from "./presentational";
import { Animated,Easing } from "react-native";


export default  function Advertising(props){
    

const [isVisible, setIsVisible] = useState(true);
const [fadeValue, setFadeValue] = useState(new Animated.Value(1));
const [swipeBackAdvertising, setSwipeBackAdvertising] = useState(new Animated.Value(0));

const dataApi = {
    title: "Agora você pode importar seus produtos do Itaú.",
    message: "Todos os seus produtos Itaú conectados automaticamente no Kinvo.",
    colorTitle: "#FF9B52"
  };


  function closeAdvertising (){
     closeAnimation()    
};

function closeAnimation () {  

   Animated.parallel([
      Animated.timing(fadeValue, {
          toValue: 0,
          duration: 600,
        }),
      Animated.timing(swipeBackAdvertising, {
        toValue: 45,
        duration: 600,
      }),      
    ]).start(() =>setIsVisible(false));     
  
}



  const { title, message, colorTitle } = dataApi;

    if (isVisible)
    return React.createElement(Presentational, {
        isVisible,
        fadeValue,
        swipeBackAdvertising,
      title,
      message,
      colorTitle,
      closeAdvertising
    });

  return null;
}

