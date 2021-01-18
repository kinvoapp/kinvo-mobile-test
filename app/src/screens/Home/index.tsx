import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import CardList from "../../components/CardList";
import Card from "../../components/Card";
import { RootStackParamList } from "../../utils/navigator";
import Typography from "../../components/Typography";
import Badget from "../../components/Badget";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Icon";
import { IconCircle, OptionContainer, OptionNameContainer } from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

type Option = {
  title: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  redirectTo?: keyof RootStackParamList;
  subtitle: string;
  isNew?: boolean;
};

function Home({ navigation }: Props) {
  const options: Option[] = [
    {
      title: "Ações",
      icon: "stocks",
      subtitle: "Nacionais",
      redirectTo: "Stocks",
    },
    {
      title: "Fundos",
      icon: "funds",
      subtitle: "De investimentos",
      isNew: true,
    },
    { title: "Previdências", icon: "pension", subtitle: "Privadas" },
  ];

  return (
    <CardList
      data={options}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item: option, index }) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            option.redirectTo && navigation.push(option.redirectTo)
          }
        >
          <Card>
            <OptionContainer>
              <IconCircle>
                <Icon name={option.icon} />
              </IconCircle>
              <OptionNameContainer>
                <Typography type="title">{option.title}</Typography>
                <Typography type="subtitle">{option.subtitle}</Typography>
              </OptionNameContainer>
              {option.isNew && <Badget title="Novo" />}
            </OptionContainer>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

export default Home;
