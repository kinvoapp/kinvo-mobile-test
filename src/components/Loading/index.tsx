import React, { useEffect, useRef } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LoadingImage from '~/assets/images/load.png';
import { ReactNodeProps } from '~/types/reactNode';
import { Container } from './styles';

interface LoadingProps extends ReactNodeProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ visible, children }) => {
  const wasStarted = useRef(false);

  const loadingAnim = useSharedValue(0);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${loadingAnim.value}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    if (visible && !wasStarted.current) {
      wasStarted.current = true;

      loadingAnim.value = withRepeat(
        withTiming(360, { duration: 750, easing: Easing.linear }),
        -1,
      );
    }
  }, [visible, loadingAnim]);

  if (!visible) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return (
    <Container>
      <Animated.Image style={imageStyle} source={LoadingImage} />
    </Container>
  );
};

export default Loading;
