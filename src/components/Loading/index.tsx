
import { Container } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const spinValue = new Animated.Value(0);

export function Loading() {

  useEffect(() => {

    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 32100,
        useNativeDriver: true,
      })
    ]).start();

  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '15000deg'],
  });

  return (
    <Container>
      <Animated.View
        style={{ transform: [{ rotate: spin }], width: 41, height: 41 }}
      >
        <AntDesign name="loading1" size={41} color="#6F4DBF" />
      </Animated.View>
    </Container >
  );
}
