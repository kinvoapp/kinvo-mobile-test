import React from 'react';
import {ContainerHeader, Text, ContentButton} from './styles';
import ArrowBack from '../../../assets/icons/arrow_back.svg';
import colors from '../../resources/colors';
interface Iprops {
  title: String;
  onPress?: () => {};
}
export default function KinHeader({title, onPress}: Iprops) {
  return (
    <ContainerHeader>
      {onPress && (
        <ContentButton
          activeOpacity={0.7}
          underlayColor={colors.primary}
          onPress={onPress}>
          <ArrowBack />
        </ContentButton>
      )}
      <Text>{title}</Text>
    </ContainerHeader>
  );
}
