import React, {useCallback, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import loadingIcon from '../../assets/icons/Load.png';

export const Loading = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = useCallback(() => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 8,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  }, [rotateValueHolder])

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startImageRotateFunction()
  }, [startImageRotateFunction]);

  return (
    <View>
      <Animated.Image
        style={{
          transform: [{rotate: rotateData}],
        }}
        source={loadingIcon}
      />
    </View>
  );
};
