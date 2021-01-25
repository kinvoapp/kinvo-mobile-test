import React from 'react';
import { ActivityIndicator } from 'react-native';

import { View } from './styles';

const LoadScreen: React.FC = () => {
  return (
    <>
      <View>
        <ActivityIndicator
          size={100}
          color="#6F4DBF"
        />
      </View>
    </>
  )
}

export default LoadScreen;
