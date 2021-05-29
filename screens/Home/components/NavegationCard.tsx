import React, { FC } from "react";
import { RowSpacedView, RowView } from "../../../styles";
import {
  NavigationCardTitle,
  NavigationCardSubtitle,
  NavigationCardContainer,
  TextContainer,
  RowContainer,
} from "../style";
import { NavigationCardProps } from "./types";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Label } from "../../../components";

/** TODO mudar o lugar desse props */
const NavigationCard: FC<NavigationCardProps> = ({
  navigationHandler,
  logo,
  title,
  subtitle,
  newSection,
}) => {
  const newLabel = newSection ? <Label text="Novo" /> : null;

  // TODO remover inline style
  return (
    <TouchableOpacity onPress={navigationHandler}>
      <NavigationCardContainer>
        <RowContainer>
          <RowView>
            <View
              style={{
                backgroundColor: "#ECF0F2",
                borderRadius: 100,
                padding: 15,
                overflow: "hidden",
              }}
            >
            {logo}
            </View>
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
