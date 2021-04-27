import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

const Internet: React.FC = () => {
    const { goBack } = useNavigation();
    function handleNavigateBack() {
      goBack();
    }

    return(
        <Container>
            <Text style={{color:'#627179', fontSize:18}}>Ocorreu um erro.</Text>
            <Text style={{color:'#627179', fontSize:14}}>Não foi possível se conectar a Internet.</Text>
            <TouchableOpacity onPress={handleNavigateBack} style={{ backgroundColor:"#6F4DBF", borderRadius:15, borderWidth: 1, width:200, display:'flex', alignItems:'center', padding:10, marginTop:20}}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>TENTAR NOVAMENTE</Text>
            </TouchableOpacity>            
        </Container>
    );
}

export default Internet;