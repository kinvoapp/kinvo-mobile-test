import React from "react";
import NavigationButton from "../../../components/NavigationButton";
import navData from "./navData.json";
import * as S from "./styles";

export default function ChallengeScreen({ navigation }) {
  return (
    <S.Container>
      {navData.navData.map((element, index) => (
        <NavigationButton
          key={index}
          status={element.status}
          title={element.title}
          description={element.description}
          icon={element.icon}
          onPress={() => navigation.navigate(element.route)}
        />
      ))}
    </S.Container>
  );
}
