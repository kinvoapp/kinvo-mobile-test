import React from 'react';

// Images
import backButton from '~/assets/images/back-button.png';

// Styles
import { BackButton, Container, Image, Text } from './styles';

const Header = ({ navigation, scene }) => {
  const { title } = scene.descriptor.options;
  const { canGoBack } = navigation;
  return (
    <Container>
      {canGoBack() && (
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={backButton} />
        </BackButton>
      )}
      <Text>{title}</Text>
    </Container>
  );
};

export default Header;
