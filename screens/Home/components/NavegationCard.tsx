import React, { FC } from "react";
import { RowView } from "../../../styles";
import {
  NavigationCardTitle,
  NavigationCardSubtitle,
  NavigationCardContainer,
  TextContainer,
  RowContainer,
} from "../style";
import { NavigationCardProps } from "./types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Label } from "../../../components";

const NavigationCard: FC<NavigationCardProps> = ({
  navigationHandler,
  logo,
  title,
  subtitle,
  newSection,
}) => {
  const newLabel = newSection ? <Label text="Novo" /> : null;

  return (
    <TouchableOpacity onPress={navigationHandler}>
      <NavigationCardContainer>
        <RowContainer>
          <RowView>
            {logo}
            <TextContainer>
              <NavigationCardTitle>{title}</NavigationCardTitle>
              <NavigationCardSubtitle>{subtitle}</NavigationCardSubtitle>
            </TextContainer>
          </RowView>
          {newLabel}
        </RowContainer>
      </NavigationCardContainer>
    </TouchableOpacity>
  );
};

export default NavigationCard;
