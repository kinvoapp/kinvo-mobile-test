import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const Load: React.FC = () => {
    return(
        <Container>
            <ActivityIndicator color='#6F4DBF' size='large' />
        </Container>
    );
}

export default Load;