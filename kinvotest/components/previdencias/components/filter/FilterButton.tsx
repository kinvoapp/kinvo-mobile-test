import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DEFAULT_PURPLE, DEFAULT_TEXT_COLOR, DEFAULT_WHITE } from '../../../../assets/constants/colors';

export const FilterButton = ({
  title,
  isSelected = false,
  onPress,
}: {
  title: string;
  isSelected?: Boolean;
  onPress: () => void;
}) => {
  const {
    baseButtonContainerStyle,
    selectedButtonContainerStyle,
    baseButtonTitleStyle,
    selectedButtonTitleStyle,
  } = styles;
  return (
    <Button
      title={title}
      onPress={onPress}
      titleStyle={isSelected ? [baseButtonTitleStyle, selectedButtonTitleStyle] : baseButtonTitleStyle}
      buttonStyle={isSelected ? [baseButtonContainerStyle, selectedButtonContainerStyle] : baseButtonContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  baseButtonTitleStyle: {
    fontSize: 12,
    fontFamily: 'ms-semibold',
    color: DEFAULT_TEXT_COLOR,
  },
  selectedButtonTitleStyle: {
    color: DEFAULT_WHITE,
  },
  baseButtonContainerStyle: {
    borderRadius: 20,
    minWidth: 100,
    backgroundColor: DEFAULT_WHITE,
  },
  selectedButtonContainerStyle: {
    backgroundColor: DEFAULT_PURPLE,
  },
});
