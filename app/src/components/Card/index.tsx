import React from 'react';

import { ImageSourcePropType, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  CardBoxButton,
  Wrapper,
  ImageCircle,
  ImageInsideTheCircle,
  Description,
  TitleCard,
  WrapperText,
  New,
  NewText,
} from './styles';

interface ICardProps {
  sourceImage: ImageSourcePropType;
  title: string;
  description: string;
  alertNew?: boolean;
  navigateTo: string;
}

const Card: React.FC<ICardProps> = ({
  sourceImage,
  title,
  description,
  alertNew,
  navigateTo,
}) => {
  const navigation = useNavigation();

  return (
    <CardBoxButton onPress={() => navigation.navigate(navigateTo)}>
      <Wrapper>
        <ImageCircle>
          <ImageInsideTheCircle source={sourceImage} />
        </ImageCircle>
        <WrapperText>
          <TitleCard>{title}</TitleCard>
          <Description>{description}</Description>
        </WrapperText>
        {
          alertNew ?
            <New>
              <NewText>Novo</NewText>
            </New> :
          <View />
        }
      </Wrapper>
    </CardBoxButton>
  );
};

export default Card;
