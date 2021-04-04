import {Alert} from 'react-native';


const alerts = {
    single : (alertTitle, alertMessage, behavior) => {
        Alert.alert(
            alertTitle,
            alertMessage,
            [
              {text: 'OK', onPress: behavior}
            ]
        )
    },
    double: (alertTitle, 
        alertMessage, 
        firstButtonBehavior, 
        firstButtonTitle, 
        secondButtonBehavior, 
        secondButtonTitle) => {
            Alert.alert(
            alertTitle,
            alertMessage,
            [
            {text: firstButtonTitle, onPress: firstButtonBehavior},
            {text: secondButtonTitle, onPress: secondButtonBehavior}
            ]
        )
    },
    triple: (alertTitle, 
                alertMessage, 
                firstButtonBehavior, 
                firstButtonTitle, 
                secondButtonBehavior, 
                secondButtonTitle, 
                thirdButtonBehavior,
                thirdButtonTitle) => {
                    Alert.alert(
            alertTitle,
            alertMessage,
            [
              {text: firstButtonTitle, onPress: firstButtonBehavior},
              {text: secondButtonTitle, onPress: secondButtonBehavior},
              {text: thirdButtonTitle, onPress: thirdButtonBehavior}
            ]
        )
    }
}

export { alerts as default };