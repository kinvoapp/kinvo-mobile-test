import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';



export default function Home(){
    return(
<ScrollView 
showsVerticalScrollIndicator={false}
style={{backgroundColor:'#FFF', }}
>
<Text>
    Tela inicial 
</Text>

</ScrollView>


    );
}

const styles = StyleSheet.create({



});